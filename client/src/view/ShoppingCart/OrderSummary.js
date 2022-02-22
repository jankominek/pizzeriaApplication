import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ButtonToMain, DishBlockLeft, DishBlockRight, DishBlockSpan, DishBlockWrapper, Flex, GreenSpan, InformationBlock, InformationField, IngsContainer, IngSpan, SpanTitle, SummaryContainer, SummaryTitle, SummaryWrapper } from "./OrderSummary.styled";


export const OrderSummary = () => {

    const [OrderState, setOrderState] = useState("");
    const [summaryPrice, setSummaryPrice] = useState();


    const navigate = useNavigate();

    const redux = useSelector( state => state);
    console.log("OrderState", OrderState)
    useEffect(()=>{
        redux.lastOrder && setOrderState(redux.lastOrder)
    }, [])

    useEffect(()=>{
        OrderState && getFullOrderPrice(OrderState.order.dishes);
    }, [OrderState])

    useEffect(()=>{
        if(summaryPrice){
            const objectemail = {
                dishes : [...OrderState.order.dishes],
                generalPrice : summaryPrice
            }
            console.log("JAJSDJASDJASDJASJDASJDJADJASDJASJD: ", objectemail)
            
            axios.post(`http://localhost:8079/pizza/sendMail/${redux.userInfo.email}`, objectemail)
                .then(response => {
                    console.log(response.data)
                })
            // axios.post(`http://localhost:8079/pizza/sendMail/fixame7567@reimondo.com`, objectemail)
        }
    }, [summaryPrice])

    useEffect(()=>{
        
    }, [])

    const countDoubleIndegriends = (ingredientList, ingTofind) => {
        const listOfSearch = ingredientList.filter( (element) => element === ingTofind);
        console.log("maches count : ", listOfSearch.length)
        return listOfSearch.length;
    } 
    
    const checkIfIngIsAddition = (ingredient) => {
        const ifStartWith = ingredient.startsWith("ad/");
        return ifStartWith;
    }

    const showIngredientCounts = (ingredients) => {
        const uniqIng = [...new Set(ingredients)];
        const ingredientToShow = uniqIng.map((element)=>{
            const count = countDoubleIndegriends(ingredients, element);
            const ingObject = {
                name : element,
                count: count,
                price : 5.5 * count,
                isAddition : checkIfIngIsAddition(element)
            };
            return ingObject;
        })
        console.log("ingredientToShow object : ", ingredientToShow)
        return ingredientToShow;
    }

    
    const replacesAddition = (ingredient) => {
        return ingredient.replace("ad/", "");
    }
    
    const getFullOrderPrice = (dishes) => {
        let price = 0;
        let additionalIngredientsCount = 0;
        dishes.forEach(element => {
            price = price + element.dish_price;
            const countIngs = element.ingredients.filter( (ingName) => checkIfIngIsAddition(ingName))
            additionalIngredientsCount = additionalIngredientsCount + countIngs.length;
        });
        console.log("Additional ingredients COINT : ", additionalIngredientsCount)
        const returnPrice = Math.round((price + (additionalIngredientsCount * 5.5)) * 100)/ 100;
        setSummaryPrice(returnPrice);

        return returnPrice;
    }


    const ingredientList = (ingredients) => {
        console.log("INGREDIENTS : ", ingredients)
        const preparedIngs = showIngredientCounts(ingredients);
        console.log("preparedIngs : ", preparedIngs)
        
        const ings = preparedIngs.map((ing) => (
            <IngsContainer>
                <Flex>
                    <IngSpan>{replacesAddition(ing.name)}</IngSpan>
                    {ing.isAddition ? <GreenSpan>x{ing.count}</GreenSpan> : <IngSpan>x{ing.count}</IngSpan>}
                    {ing.isAddition && <IngSpan>{ing.count * 5.5}zł</IngSpan>}
                </Flex>
                
            </IngsContainer>
        ))
        return ings;
    }
    const dishList = OrderState && OrderState.order.dishes.map((dish)=>(
        <DishBlockWrapper>
            <DishBlockLeft>
                <DishBlockSpan>{dish.dish_name}</DishBlockSpan>
                <DishBlockSpan>cena dania: {dish.dish_price} zł</DishBlockSpan>
            </DishBlockLeft>
            <DishBlockRight>
                <DishBlockSpan>Składniki </DishBlockSpan>
                {ingredientList(dish.ingredients)}
            </DishBlockRight>
            
        </DishBlockWrapper>
    ))
    return(
        <>
            <SummaryWrapper>
                <SummaryContainer>
                    <SummaryTitle>Podsumowanie</SummaryTitle>
                    <SpanTitle>Dane zamówienia</SpanTitle>
                    <InformationField>
                        <InformationBlock>Adres : { OrderState && OrderState.order.address}</InformationBlock>
                        <InformationBlock>Płatność : { OrderState && OrderState.order.payment}</InformationBlock>
                        <InformationBlock>Nr.Telefonu : { OrderState && OrderState.order.phone}</InformationBlock>
                        <InformationBlock>Koszt zamówienia : { summaryPrice} zł</InformationBlock>
                    </InformationField>
                    <SpanTitle>Dane zamówienia</SpanTitle>
                    {dishList}
                    <ButtonToMain onClick={()=> navigate("/pizzeria")}>Wyjdź z podsumowania</ButtonToMain>
                </SummaryContainer>
                
            </SummaryWrapper>
        </>
    )
}