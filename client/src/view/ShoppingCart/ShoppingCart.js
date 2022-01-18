import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router';
import { useDispatch, useSelector } from "react-redux"
import { deleteFromShoppingCart, setShoppingCart } from "../../utils/store/actions/shoppingCartAction"
import { Label, AddressWrapper, AdressInput, Cart, CartIngredientField, CartIngredientSpan, CartName, CheckBox, checkBoxWrapper, DeleteIcon, OrderField, OrderInformationBox, Price, SCName, ShoppingCartContainer, SubmitButton, PaymentCheckBox, PaymentWrapper, PaymentCheckboxLabel, BackBtn, DeleteIconWrapper } from "./ShoppingCart.styles"
import {MdClear} from "react-icons/md";

export const ShoppingCart = () => {

    const shopCart = useSelector( state => state);

    const [shoppingState, setShoppingState] = useState(shopCart.shoppingCart.products);
    const [userEmail, setUserEmail] = useState('');

    const [additionInfo, setAdditionInfo] = useState({
        address: "",
        phone: "",
        karta: false,
        gotówka: false
    });

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

    const validationPayment = (data) => {
        if(data.karta && data.gotówka || !data.karta && !data.gotówka) return false;
        return true;
    }
    const postOrder = () => {
        const resultVal = validationPayment(additionInfo)
        if(resultVal){
            const payment = Object.entries(additionInfo).filter( ([key, value]) => {
                if(value === true) return value;
            })
            console.log("payment: ", payment[0][0])
            const objectToSend = {
                address : additionInfo.address,
                phone : additionInfo.phone,
                payment : payment[0][0].toUpperCase(),
                dishes : shoppingState
            }
            console.log("objectToSend: ", objectToSend)
            axios.post(`http://localhost:8079/dish/order/new/${shopCart.userInfo.email}`, objectToSend)
            navigate('/pizzeria')
        }else{

        }
        console.log("result validation : ", resultVal)
        console.log("ordeeeer : ", additionInfo)

        
    }

    const deleteSelected = (event) => {
        dispatch(deleteFromShoppingCart(event.target.id))    
    }

    console.log(shoppingState)
    const productList = shoppingState.map( (element)=> (
        <Cart>
            <DeleteIconWrapper >
                <MdClear id={element.dish_name} onClick={deleteSelected}/>
            </DeleteIconWrapper>
            <CartName>{element.dish_name}</CartName>
            <CartIngredientField>
                {element.ingredients.map((ingredient)=>(
                    <CartIngredientSpan>{ingredient}</CartIngredientSpan>
                ))}
            </CartIngredientField>
        </Cart>
    ))
    const onChangeAdditionInfo = (event) => {
        console.log(event)
            if(event.target.name === 'karta' || event.target.name === 'gotówka'){
                setAdditionInfo({
                    ...additionInfo,
                    [event.target.name] : event.target.checked
                })
            }else{
                setAdditionInfo({
                    ...additionInfo,
                    [event.target.name] : event.target.value
                })
            }
    }
    console.log(shoppingState)
    return(
        <>
        <ShoppingCartContainer>
            { shoppingState.length ? 
            <OrderInformationBox>
            <AddressWrapper>
                <Label>Adres dostawy..</Label>
                <AdressInput placeholder="adres dostawy.." name="address" onChange={onChangeAdditionInfo}/>
            </AddressWrapper>
            <AddressWrapper>
                <Label>Numer telefonu..</Label>
                <AdressInput placeholder="Numer telefonu.." name="phone" onChange={onChangeAdditionInfo}/>
            </AddressWrapper>
            <PaymentWrapper>
                <Label>Płatność..</Label>
                <checkBoxWrapper>
                    <PaymentCheckBox name="karta" onChange={onChangeAdditionInfo}/>
                    <PaymentCheckboxLabel>karta</PaymentCheckboxLabel>
                </checkBoxWrapper>
                <checkBoxWrapper>
                    <PaymentCheckBox name="gotówka" onChange={onChangeAdditionInfo}/>
                    <PaymentCheckboxLabel>gotówka</PaymentCheckboxLabel>
                </checkBoxWrapper>
            </PaymentWrapper>
            
        </OrderInformationBox>
            : null
        }
            <SCName>Twoje zamówienie..</SCName>
            <OrderField>
                {productList}
            </OrderField>
            <SubmitButton onClick={postOrder}>Zamów</SubmitButton>
            
        </ShoppingCartContainer>

        <BackBtn onClick={() => navigate("/pizzeria")}>Powrót do menu..</BackBtn>
        </>
    )
}