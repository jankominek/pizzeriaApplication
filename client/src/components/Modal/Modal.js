import axios from "axios"
import { useEffect, useState } from "react"
import { AddButton, CheckBox, IngredientField, IngredientName, ModalContainer, ModalWrapper } from "./Modal.styles"


export const Modal = (props) => {

    const [allIngredients, setAllIngredients] = useState();
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const {dishIngredients, isModalShowing, checkedData} = props;

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
        if(e.target.checked){
            setSelectedIngredients([...selectedIngredients, e.target.name]);
        }
        if(!e.target.checked){
            const newSelectedIngredients = selectedIngredients.filter( element => element != e.target.name)
            setSelectedIngredients(newSelectedIngredients);
        }
    }
    
    const SubmitIngredients = () => {
        checkedData(selectedIngredients);
        isModalShowing(false);
        
    }

    const ingredientsList = allIngredients && allIngredients.map( element => (
        <IngredientField>
                <CheckBox name={element.ingredient_name} onChange={onCkeckboxSelect}/>
                <IngredientName>{element.ingredient_name}</IngredientName>
        </IngredientField>
    ));

    return(
        <ModalContainer>
            <ModalWrapper>
                {ingredientsList}
                <AddButton onClick={SubmitIngredients}>Dodaj składniki..</AddButton>
            </ModalWrapper>
        </ModalContainer>
    )
}