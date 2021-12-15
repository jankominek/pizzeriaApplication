import axios from "axios"
import { useEffect, useState } from "react"
import { IngredientsField } from "../../view/DishPage/DishPage.styles";
import { CheckBox, IngredientName, ModalWrapper } from "./Modal.styles"


export const Modal = (props) => {

    const [allIngredients, setAllIngredients] = useState();
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const {dishIngredients} = props;

    useEffect(()=>{
        getAllIngredients();
    }, [])

    const getAllIngredients = () => {
        axios.get('http://localhost:8079/ingredient/all')
            .then( response => {
                setAllIngredients(response.data);
                console.log(response.data)
            })
    }
    
    const onCkeckboxSelect = (e) => {
        console.log(e)
        setSelectedIngredients([...selectedIngredients, e.target.name]);
        console.log("selectedIngredients : ",selectedIngredients)
    }

    const ingredientsList = allIngredients && allIngredients.map( element => (
        <IngredientsField>
                <CheckBox name={element.ingredient_id} onChange={onCkeckboxSelect}/>
                <IngredientName>{element.ingredient_name}</IngredientName>
        </IngredientsField>
    ));

    return(
        <ModalWrapper>
            {ingredientsList}
        </ModalWrapper>
    )
}