import axios from "axios"
import { useEffect } from "react"
import { Cart, CartIngredientField, CartIngredientSpan, CartName, OrderField, Price, SCName, ShoppingCartContainer, SubmitButton } from "./ShoppingCart.styles"


export const ShoppingCart = () => {


    useEffect(()=> {

    }, [])

    const getUserOrders = () => {
        axios.get()
        .then((response)=>{
            console.log(response.data)
        })
    }

    return(
        <ShoppingCartContainer>
            <SCName>Twoje zamówienie..</SCName>
            <OrderField>
                <Cart>
                    <CartName>Name</CartName>
                    <CartIngredientField>
                        <CartIngredientSpan>aaaa</CartIngredientSpan>
                        <CartIngredientSpan>bbbb</CartIngredientSpan>
                        <CartIngredientSpan>ccc</CartIngredientSpan>
                    </CartIngredientField>
                </Cart>
            </OrderField>
            <SubmitButton>Zamów</SubmitButton>
        </ShoppingCartContainer>
    )
}