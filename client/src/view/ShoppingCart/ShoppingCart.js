import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router';
import { useDispatch, useSelector } from "react-redux"
import { deleteFromShoppingCart, setShoppingCart } from "../../utils/store/actions/shoppingCartAction"
import { Cart, CartIngredientField, CartIngredientSpan, CartName, CheckBox, checkBoxWrapper, DeleteIcon, OrderField, Price, SCName, ShoppingCartContainer, SubmitButton } from "./ShoppingCart.styles"


export const ShoppingCart = () => {

    const shopCart = useSelector( state => state);

    const [shoppingState, setShoppingState] = useState(shopCart.shoppingCart.products);
    const [userEmail, setUserEmail] = useState('');

    const [selected, setSelected] = useState({keys: []});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=> {
        shopCart && setShoppingState(shopCart.shoppingCart.products) && setUserEmail(shopCart.userInfo.email)
    }, [shopCart])

    console.log("user email: ", shopCart)
    const getUserOrders = () => {
        axios.get()
        .then((response)=>{
        })
    }
    const postOrder = () => {
        axios.post(`http://localhost:8079/dish/order/new/${shopCart.userInfo.email}`, shoppingState)
            .then( response => {
            })
        navigate('/pizzeria')
        
    }

    const deleteSelected = () => {
        console.log("selected in delete selected : ", selected)
        selected.keys.forEach( s => dispatch(deleteFromShoppingCart(s.key)))
        
    }

    const selectItemToRemove = (element) => {
        if(element.target.checked){
            const key = {
                key: element.target.id
            }
            setSelected({
                keys: [...selected.keys, key]
            })
        }
        if(!element.target.checked){
            const key = element.target.id;
            const newSelected = selected.keys.filter( old => old.key !== key)
            setSelected({
                keys: newSelected
            })
        }
    }
    const productList = shoppingState.map( (element)=> (
        <Cart>
            <checkBoxWrapper>
                zaznacz by usunać
                <CheckBox id={element} onClick={selectItemToRemove}/>
            </checkBoxWrapper>
            <CartName>{element.dish_name}</CartName>
            <CartIngredientField>
                {element.ingredients.map((ingredient)=>(
                    <CartIngredientSpan>{ingredient}</CartIngredientSpan>
                ))}
            </CartIngredientField>
        </Cart>
    ))
    return(
        <ShoppingCartContainer>
            <SCName>Twoje zamówienie..</SCName>
            {selected && <DeleteIcon onClick={deleteSelected}>Usuń zaznaczone</DeleteIcon>}
            <OrderField>
                {productList}
            </OrderField>
            <SubmitButton onClick={postOrder}>Zamów</SubmitButton>
        </ShoppingCartContainer>
    )
}