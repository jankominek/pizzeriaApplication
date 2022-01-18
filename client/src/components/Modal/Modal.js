import axios from "axios"
import { useEffect, useState } from "react"
import { AddButton, CheckBox, CloseButton, CountField, FlexWrapper, IconWrapper, IngredientCountWrapper, IngredientField, IngredientName, ModalContainer, ModalWrapper, Price, ProductWithCheckBoxContainer } from "./Modal.styles"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Modal = (props) => {

    const [allIngredients, setAllIngredients] = useState();
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [additiondIngredients, setAdditionIngredients] = useState([]);

    const {dishIngredients, isModalShowing, checkedData} = props;



    useEffect(()=>{
        getAllIngredients();
    }, [])

    const preapreIngredientMap = (data) => {
        const ingredientMapObject = data.map( element => {
            const ingObject = {
                ingredient_name: element.ingredient_name,
                count: 0,
                isSelected : 0
            }

            return ingObject;
        })

    }
    const getAllIngredients = () => {
        axios.get('http://localhost:8079/ingredient/all')
            .then( response => {
                const dataWithCounts = response.data.map( element => {
                    const newData = {
                        ...element, 
                        count: 0
                    }
                    return newData;
                })
                dataWithCounts && setAllIngredients(dataWithCounts);
                // preapreIngredientMap(response.data)
            })
    }
    console.log("all ingredients : ", allIngredients)
    const onCkeckboxSelect = (e) => {
        if(e.target.checked){
            setSelectedIngredients([...selectedIngredients, e.target.name]);
        }
        if(!e.target.checked){
            const newSelectedIngredients = selectedIngredients.filter( element => element != e.target.name)
            setSelectedIngredients(newSelectedIngredients);
        }
    }
    
    const SubmitIngredients = () => {
        checkedData(allIngredients);
        isModalShowing(false);
        
    }

    const increseIngredient = (data, ingredient) => {
         const itemIndex = allIngredients.findIndex( element => element.ingredient_name === ingredient);
         const increaseItem = allIngredients.filter( (element) => {
             return element.ingredient_name === ingredient;
         })
         
         const ingredientWithoutItem = allIngredients.filter( e => {
             return e.ingredient_name !== ingredient;
         })

         increaseItem[0].count = increaseItem[0].count + 1
         ingredientWithoutItem.splice(itemIndex, 0, increaseItem[0]);
         setAllIngredients(ingredientWithoutItem);

         
          
    }
    const decreaseIngredient = (data, ingredient) => {
        const decreaseItem = allIngredients.filter( (element) => {
            return element.ingredient_name === ingredient;
        })
        if(decreaseItem[0].count > 0){
            const itemIndex = allIngredients.findIndex( element => element.ingredient_name === ingredient);

            const ingredientWithoutItem = allIngredients.filter( e => {
                return e.ingredient_name !== ingredient;
            })

            decreaseItem[0].count = decreaseItem[0].count - 1
            ingredientWithoutItem.splice(itemIndex, 0, decreaseItem[0]);
            setAllIngredients(ingredientWithoutItem);
        }
        
    }

    const ingredientsList = allIngredients && allIngredients.map( element => (
        <IngredientField>
            {/* <ProductWithCheckBoxContainer>
                <CheckBox name={element.ingredient_name} onChange={onCkeckboxSelect}/>
                <IngredientName>{element.ingredient_name}</IngredientName>
            </ProductWithCheckBoxContainer> */}
            <IngredientName>{element.ingredient_name}</IngredientName>
            <IngredientCountWrapper >
                <IconWrapper onClick={(e) => decreaseIngredient( e, element.ingredient_name)}>
                    <MdChevronLeft />
                </IconWrapper>
                <CountField>{element.count}</CountField>
                <IconWrapper onClick={(e) => increseIngredient( e, element.ingredient_name)}>
                    <MdChevronRight />
                </IconWrapper>
            </IngredientCountWrapper>
            <Price>{element.ingredientPrice} zł</Price>
        </IngredientField>
    ));

    return(
        <ModalContainer>
            <ModalWrapper>
                {ingredientsList}
                <FlexWrapper>
                    <AddButton onClick={SubmitIngredients}>Dodaj składniki..</AddButton>
                    <CloseButton onClick={SubmitIngredients}>Zamknij</CloseButton>
                </FlexWrapper>
            </ModalWrapper>
        </ModalContainer>
    )
}