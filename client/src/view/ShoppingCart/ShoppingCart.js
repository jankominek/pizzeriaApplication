import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router';
import { useDispatch, useSelector } from "react-redux"
import { deleteFromShoppingCart, setShoppingCart } from "../../utils/store/actions/shoppingCartAction"
import { Label, AddressWrapper, AdressInput, Cart, CartIngredientField, CartIngredientSpan, CartName, CheckBox, checkBoxWrapper, DeleteIcon, OrderField, OrderInformationBox, Price, SCName, ShoppingCartContainer, SubmitButton, PaymentCheckBox, PaymentWrapper, PaymentCheckboxLabel, BackBtn, DeleteIconWrapper, FlexIng, ErrorMess, Test, CartIngredientSpan2, Span } from "./ShoppingCart.styles"
import {MdClear} from "react-icons/md";
import { SuccessComponent } from "../../utils/successfullComponent/SuccessComponent";
import { ErrorComponent } from "../../utils/errorComponent/ErrorComponent";
import { setLastOrder } from "../../utils/store/actions/LastOrder";

export const ShoppingCart = () => {

    const shopCart = useSelector( state => state);

    const [shoppingState, setShoppingState] = useState(shopCart.shoppingCart.products);
    // const [userEmail, setUserEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [showSuccessComponent, setSuccessComponent] = useState(false);
    const [showErrorComponent, setErrorComponent] = useState(false);
    const [generalPrice, setGeneralPrice] = useState(0);
    const [additionInfo, setAdditionInfo] = useState({
        address: "",
        phone: "",
        karta: false,
        gotówka: false
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=> {
        shopCart && setShoppingState(shopCart.shoppingCart.products)
    }, [shopCart])

    console.log("user email: ", shopCart)

    const validationPayment = (data) => {
        setErrorMessage("");
        const phoneRegex = new RegExp("^[0-9]{9}$")
        if(data.karta && data.gotówka || !data.karta && !data.gotówka){
            setErrorMessage("brak wszystkich danych")
            return false;
        };
        if(!phoneRegex.test(data.phone)) {
            setErrorMessage("błędny format numeru telefonu")
            return false;
        }
    
        return true;
    }
    const postOrder = () => {
        const resultVal = validationPayment(additionInfo)
        if(resultVal){
            setSuccessComponent(true)
            const payment = Object.entries(additionInfo).filter( ([key, value]) => {
                if(value === true) return value;
            })
            const ingredientsWithoutAd = shoppingState.map((obj) => {
                const newIng = obj.ingredients.map( (ing) => replacesAddition(ing))
                const replacedShoppingState = {
                    dish_name : obj.dish_name,
                    ingredients : newIng,
                    isMod : obj.isMod,
                    dish_price : obj.dish_price
                }
                return replacedShoppingState;
            })

            const ingsWithAd = shoppingState.map((obj) => {
                const lastOrderDishState = {
                    dish_name : obj.dish_name,
                    ingredients : obj.ingredients,
                    isMod : obj.isMod,
                    dish_price : obj.dish_price
                }
                return lastOrderDishState;
            })
            console.log("XOXOXOXOXOXO : ", ingsWithAd);

            const lastOrderState = {
                address : additionInfo.address,
                phone : additionInfo.phone,
                payment : payment[0][0].toUpperCase(),
                dishes : ingsWithAd
            }
            dispatch(setLastOrder(lastOrderState))
            const objectToSend = {
                address : additionInfo.address,
                phone : additionInfo.phone,
                payment : payment[0][0].toUpperCase(),
                dishes : ingredientsWithoutAd
            }
            axios.post(`http://localhost:8079/dish/order/new/${shopCart.userInfo.email}`, objectToSend)
            dispatch(deleteFromShoppingCart(1))  
        }
    }

    const closeSuccErrorComponent = () => {
        setSuccessComponent(false);
        setErrorComponent(false);
        navigate("/pizzeria/shopping_cart/summary");
    }

    const deleteSelected = (event) => {
        dispatch(deleteFromShoppingCart(event.target.id))    
    }


    const countDoubleIndegriends = (ingredientList, ingTofind) => {
        const listOfSearch = ingredientList.filter( (element) => element === ingTofind);
        console.log("maches count : ", listOfSearch.length)
        return listOfSearch.length;
    } 

    const showIngredientCounts = (ingredients) => {
        // const ingWithoutAd = ingredients.map( (ing) => replacesAddition(ing));
        const uniqIng = [...new Set(ingredients)];
        const ingredientToShow = uniqIng.map((element)=>{
            const count = countDoubleIndegriends(ingredients, element);
            const ingObject = {
                name : element,
                count: count,
                price : 5.5 * count
            };
            return ingObject;
        })
        console.log("ingredientToShow object : ", ingredientToShow)
        return ingredientToShow;
    }

    const checkIfIngIsAddition = (ingredient) => {
        const ifStartWith = ingredient.name.startsWith("ad/");
        return ifStartWith;
    }
    const replacesAddition = (ingredient) => {
        return ingredient.replace("ad/", "");
    }

    const getFullDishPrice = (dish) => {
        const countOfAdditionIngs = dish.ingredients.filter((element)=> element.startsWith("ad/")).length;
        const dishPrice = dish.dish_price + (countOfAdditionIngs * 5.5);
        return Math.round(dishPrice * 100)/100 + " zł";
    }

    console.log("shoppingState ---> :", shoppingState);
    const productList = shoppingState.map((element)=> (
        <Cart>
            <DeleteIconWrapper >
                <MdClear id={element.dish_name} onClick={deleteSelected}/>
            </DeleteIconWrapper>
            <CartName>{element.dish_name}
            <Price>{getFullDishPrice(element)}</Price>
            </CartName>
            <CartIngredientField>
                {showIngredientCounts(element.ingredients).map((ingredient) => (
                    <FlexIng>
                    <CartIngredientSpan2 isAddition={checkIfIngIsAddition(ingredient)}>{ingredient.name.replace("ad/", "")}</CartIngredientSpan2>
                    <CartIngredientSpan2 isAddition={checkIfIngIsAddition(ingredient)}>{"x" + ingredient.count}</CartIngredientSpan2>
                    {checkIfIngIsAddition(ingredient) && <CartIngredientSpan2 isAddition={checkIfIngIsAddition(ingredient)}>{ingredient.price + "zł"}</CartIngredientSpan2>}
                    </FlexIng>
                    
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
            {errorMessage && <ErrorMess>{errorMessage}</ErrorMess>}
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
        {showSuccessComponent && <SuccessComponent message={"Zamówienie zrealizowane poprawnie"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
        {showErrorComponent && <ErrorComponent message={"Zamówienie nie zostało zrealizowane"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
        </>
    )
}

