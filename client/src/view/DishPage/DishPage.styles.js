import styled from "styled-components";

export const DishPageContainer = styled.div`

    width: 100%;
    display: flex;
    // flex-direction: ;

`

export const Picture = styled.img`
    width: 30rem;
    height: 30rem;
    margin-left: 1rem;
    margin-top: 1rem;
`
export const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-left: 1rem;
    margin-top: 1rem;
`

export const PizzaNameField = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid black;
    justify-content: space-between;
`
export const IngredientButton = styled.div`
    cursor: pointer;
    width: 13rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin-top: 1rem;
`

export const Span = styled.span`
    font-size: 2rem;
`

export const IngredientsField = styled.div`
    padding: 1rem 0rem;
    border-bottom: 1px solid black;
`
export const AdditionIngSpan = styled.span`
    margin: 0rem .3rem;
`

export const Button = styled.div`
    width: 12rem;
    height: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin-right: 2rem;
`