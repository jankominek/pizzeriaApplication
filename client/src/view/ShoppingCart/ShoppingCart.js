import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router';
import { useDispatch, useSelector } from "react-redux"
import { deleteFromShoppingCart, setShoppingCart } from "../../utils/store/actions/shoppingCartAction"
import { Label, AddressWrapper, AdressInput, Cart, CartIngredientField, CartIngredientSpan, CartName, CheckBox, checkBoxWrapper, DeleteIcon, OrderField, OrderInformationBox, Price, SCName, ShoppingCartContainer, SubmitButton, PaymentCheckBox, PaymentWrapper, PaymentCheckboxLabel, BackBtn } from "./ShoppingCart.styles"


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
    const onChangeAdditionInfo = (event) => {
        console.log(event)
            const checkBoxResponse = 0;
            // if(event.target.value)
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
    return(
        <>
        <ShoppingCartContainer>
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
            <SCName>Twoje zamówienie..</SCName>
            {selected && <DeleteIcon onClick={deleteSelected}>Usuń zaznaczone</DeleteIcon>}
            <OrderField>
                {productList}
            </OrderField>
            <SubmitButton onClick={postOrder}>Zamów</SubmitButton>
            
        </ShoppingCartContainer>

        <BackBtn onClick={() => navigate("/pizzeria")}>Powrót do menu..</BackBtn>
        </>
    )
}