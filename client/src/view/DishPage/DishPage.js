import axios from "axios";
import { useEffect, useReducer, useState } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import {useNavigate} from 'react-router';
import { Modal } from "../../components/Modal/Modal";
import { setShoppingCart } from "../../utils/store/actions/shoppingCartAction";
import { AdditionIngSpan, Button, DishPageContainer, InfoContainer, IngredientButton, IngredientsField, Picture, PizzaName, PizzaNameField, Span } from "./DishPage.styles"

export const DishPage = () => {

    const [dish, setDish] = useState();
    const [isModalShowing, setIsModalShowing] = useState(false);
    const [additionIngredients, setAdditionIngredients] = useState([]);

    const params = useParams(); 

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(()=> {
        console.log(params.id)
        GetPizzaById();
    }, [])


    const GetPizzaById = () => {
        axios.get(`http://localhost:8079/dish/${params.id}`)
            .then( response => {
                setDish(response.data);
            })
        }


    const saveOrder = () => {
        // axios.post('http://localhost:8079/')
    }

    const saveModifiedOrder = () => {

    }

    const onClickOrder = () => {
        const filteredAdditionIngredients = additionIngredients.filter( ingredient => {
            return ingredient.count !== 0;
        })
        const ingredientsStr = [...dish.ingredients];
        filteredAdditionIngredients.forEach( element => {
            if(element.count === 1) ingredientsStr.push(element.ingredient_name);
            if(element.count > 1){
                for(let i=0; i<element.count; i++){
                    ingredientsStr.push(element.ingredient_name);
                }
            }
        })
        const allIngredients = ingredientsStr;

        const dishObject = {
            dish_name : dish.dishName,
            ingredients : allIngredients,
            isMod : additionIngredients.length ? true : false

        };
        console.log("dish object : ", dishObject)
        dispatch(setShoppingCart(dishObject));
        navigate('/')
    }

    const ingredientsList = dish && dish.ingredients.map( element => ( <AdditionIngSpan> {element}</AdditionIngSpan>));
    console.log("additionIngredients : ", additionIngredients)

    const getAdditionIngredients = () => {
        const ingredients = additionIngredients.filter( (element) => element.count > 0);
        console.log("XXXXX:", ingredients)
        return ingredients;
    }
    const prepareAdditionIngredientList = () => {
        const preparedArray = [];
        getAdditionIngredients().forEach((element)=>{
            for(let i=0; i<  element.count; i++){
                preparedArray.push(element.ingredient_name)
            }
        })

        return preparedArray ? preparedArray : []
    }
    const additionIgredientsList = prepareAdditionIngredientList().map((element) => <AdditionIngSpan>{element}</AdditionIngSpan>)

    const addAdditionIngredients = () => {
        setIsModalShowing(true)
    }
    const checkedData = (data) => {
        setAdditionIngredients(data);
        console.log("test", data)
    }
    prepareAdditionIngredientList();
    return(
        <>
       <DishPageContainer>
           {dish && <Picture src={require(`../../assets/${dish.dishName}.jpg`).default}/>}
           <InfoContainer>
                <PizzaNameField>
                    <Span>{dish && dish.dishName}</Span>
                    <Button onClick={onClickOrder}>Dodaj do zamówienia..</Button>
                </PizzaNameField>
                <IngredientsField>
                    <span>Składniki : </span>{ingredientsList}
                </IngredientsField>
                {additionIngredients && <IngredientsField>
                    <span>Składniki dodatkowe : </span>{additionIgredientsList}
                </IngredientsField>}
                <IngredientButton onClick={addAdditionIngredients}>Dodaj dodatkowe składniki...</IngredientButton>
           </InfoContainer>
           
       </DishPageContainer>
       {isModalShowing && dish && 
       <Modal dishIngredients={dish.ingredients}
            isModalShowing={setIsModalShowing}
            checkedData={checkedData}
       />}
       </>
       
    )
}