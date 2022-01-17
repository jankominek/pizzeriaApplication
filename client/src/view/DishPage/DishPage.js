import axios from "axios";
import { useEffect, useReducer, useState } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import {useNavigate} from 'react-router';
import { Modal } from "../../components/Modal/Modal";
import { setShoppingCart } from "../../utils/store/actions/shoppingCartAction";
import { Button, DishPageContainer, InfoContainer, IngredientButton, IngredientsField, Picture, PizzaName, PizzaNameField, Span } from "./DishPage.styles"

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
        
        const allIngredients = [...dish.ingredients, ...additionIngredients]

        const dishObject = {
            dish_name : dish.dishName,
            ingredients : allIngredients,
            isMod : additionIngredients.length ? true : false

        };
        console.log("dish object : ", dishObject)
        dispatch(setShoppingCart(dishObject));
        navigate('/')
    }

    const ingredientsList = dish && dish.ingredients.map( element => ( <span> {element}</span>));

    const additionIgredientsList = additionIngredients && additionIngredients.map( (element)=> (<span> {element}</span>));

    const addAdditionIngredients = () => {
        setIsModalShowing(true)
    }
    const checkedData = (data) => {
        setAdditionIngredients(data);
    }

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
                    <span>Składniki : </span>{additionIgredientsList}
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