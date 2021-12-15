import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Modal } from "../../components/Modal/Modal";
import { Button, DishPageContainer, InfoContainer, IngredientsField, Picture, PizzaName, PizzaNameField, Span } from "./DishPage.styles"


export const DishPage = () => {

    const [dish, setDish] = useState();
    const params = useParams(); 

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

    const ingredientsList = dish && dish.ingredients.map( element => ( <span> {element}</span>));

    return(
        <>
       <DishPageContainer>
           <Picture src={require('../../assets/Pizza Pepperoni.jpg').default}/>
           <InfoContainer>
                <PizzaNameField>
                    <Span>{dish && dish.dishName}</Span>
                    <Button>Zamów..</Button>
                </PizzaNameField>
                <IngredientsField>
                    <span>Składniki : </span>{ingredientsList}
                </IngredientsField>
           </InfoContainer>
           
       </DishPageContainer>
       {dish && <Modal dishIngredients={dish.ingredients}/>}
       </>
    )
}