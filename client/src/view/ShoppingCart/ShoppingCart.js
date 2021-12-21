import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { setShoppingCart } from "../../utils/store/actions/shoppingCartAction"
import { Cart, CartIngredientField, CartIngredientSpan, CartName, OrderField, Price, SCName, ShoppingCartContainer, SubmitButton } from "./ShoppingCart.styles"


export const ShoppingCart = () => {

    const shopCart = useSelector( state => state.shoppingCart.products);

    const [shoppingState, setShoppingState] = useState(shopCart);

    useEffect(()=> {
        shopCart && setShoppingCart(shopCart);
    }, [shopCart])

    const getUserOrders = () => {
        axios.get()
        .then((response)=>{
            console.log(response.data)
        })
    }
    const postOrder = () => {
        axios.post(`http://localhost:8079/dish/order/new/teeest`, shoppingState)
            .then( response => {
                console.log(response)
            })
    }

    const productList = shoppingState.map( (element)=> (
        <Cart>
            <CartName>{element.dish_name}</CartName>
            <CartIngredientField>
                {element.ingredients.map((ingredient)=>(
                    <CartIngredientSpan>{ingredient}</CartIngredientSpan>
                ))}
            </CartIngredientField>
        </Cart>
    ))
    console.log(shoppingState)
    return(
        <ShoppingCartContainer>
            <SCName>Twoje zamówienie..</SCName>
            <OrderField>
                {productList}
            </OrderField>
            <SubmitButton onClick={postOrder}>Zamów</SubmitButton>
        </ShoppingCartContainer>
    )
}