import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`
export const AdressInput = styled.input`
    padding: 5px 10px;
    font-size: 1.1rem;
    &:focus{
        outline: none;
    }
`
export const Label = styled.label`
    font-size: 0.9rem;
    border-bottom: 1px solid gray;
    margin-bottom: .5rem;
`
export const checkBoxFlex = styled.div`
    display: flex;
`
export const PaymentWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`
export const AddressWrapper = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    margin-bottom: 2rem;
`
export const PaymentCheckBox = styled.input.attrs({
    type: 'checkbox'
})`
    width: 1rem;
    height: 1rem;
`
export const PaymentCheckboxLabel = styled.label`
    font-size: 1rem;
    margin-top:-1rem;
    margin-left: 0.5rem;
`
export const BackBtn = styled.div`
    cursor: pointer;
    padding: .5rem 2rem;
    border: 1px solid black;
    right: 0;
    top: 0;
    margin-right: .5rem;
    margin-top: .5rem;
    position: fixed;
`

export const OrderInformationBox = styled.div`
    width: 30rem;
    height: 20rem;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SCName = styled.span`
    font-size: 2rem;
    padding: 1rem 1rem;
    border-bottom: 1px solid red;
    margin-bottom: 2rem;
`

export const DeleteIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    color: red;
    right:0;
    top:0;
    position: absolute;
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
    position: relative;
    margin: 0rem 1rem;
    height: auto;
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

export const DeleteIcon = styled.div`
    padding: .3rem 1rem;
    margin-top: 0.2rem;
    margin-right: .2rem;
    border-radius: 10px;
    text-align: center;
    background: red;
    color: white;
    align-self: flex-end;
`
export const checkBoxWrapper = styled.div`
    background: green;
    align-self: flex-end;
`
export const CheckBox = styled.input.attrs({
    type: 'checkbox'
})`
    width: 1rem;
    height: 1rem;
    margin-left: .5rem;
`