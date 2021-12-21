import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`

export const SCName = styled.span`
    font-size: 2rem;
    padding: 1rem 1rem;
    border-bottom: 1px solid red;
    margin-bottom: 2rem;
`
export const OrderField = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
`
export const SubmitButton = styled.div`
    width: 8rem;
    height: 3rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #90ee90;
`

export const Cart = styled.div`
    width: 15rem;
    margin: 0rem 1rem;
    height: 18rem;
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CartName = styled.span`
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
    width: 90%;
    border-bottom: 1px solid black;
`
export const CartIngredientField = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;

`
export const CartIngredientSpan = styled.span`
    font-size: 1.2rem;
    color: gray;
`

export const Price = styled.span`
    font-size: 1.2rem;
`