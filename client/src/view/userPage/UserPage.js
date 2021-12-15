import React, { useEffect, useState } from "react";
import { ProductField } from "../../components/ProductField/ProductField";
import { type_of_products } from "../../utils/type_of_products";
import {UserPageContainer, CompanyName, UserName, ProductTypeContainer} from './UserPage.styled';
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import { setUserInfoAction } from "../../utils/store/actions/userStateAction";
import { ProductElementList } from "../../components/productElementList/ProductElementList";
import { ProductElement } from "../../components/ProductElement/ProductElement";

export const UserPage = (props) => {
    
    const [isUserAuth, setIsUserAuth] = useState();
    const [pizzas, setPizzas] = useState([]);

    const dispatch = useDispatch();

    useEffect(()=> {
        getUserInfo();
        getAllDishesWithIngredient();
    }, [])
    const state = useSelector( state => state)
    console.log("state : ", state)

    const getAllDishesWithIngredient = () => {
        axios.get(`http://localhost:8079/dish/withIngredients/all`)
            .then( response => {
                setPizzas(response.data);
            })
    }
    const getUserInfo = () => {
        const email = 'pkominek@gmail.com'
        axios.get(`http://localhost:8079/pizza/getUserInfo/${email}`)
            .then( response => {
                console.log(response.data)
                dispatch(setUserInfoAction(response.data))
            })
    }
    const productTypes = type_of_products.map((element, index)=>(
        <ProductField key={index} type={element.type} />
    ))
    

    return(
            <UserPageContainer> 
                <CompanyName>Pizzeria ShaurJano</CompanyName>
                <UserName>Witaj, Janek</UserName>
                <ProductTypeContainer>
                    {productTypes}
                </ProductTypeContainer>
                <ProductElementList products={pizzas}/>
            </UserPageContainer>
    )
}