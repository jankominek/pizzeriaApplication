import React, { useEffect, useState } from "react";
import { ProductField } from "../../components/ProductField/ProductField";
import { type_of_products } from "../../utils/type_of_products";
import {UserPageContainer, CompanyName, UserName, ProductTypeContainer, ShoppingCartIconContainer, ShoppingCartContainer, EditUserIconContainer} from './UserPage.styled';
import axios from 'axios';
import {useNavigate} from 'react-router';
import { useDispatch, useSelector} from "react-redux";
import { ProductElementList } from "../../components/productElementList/ProductElementList";

export const UserPage = (props) => {
    
    const [isUserAuth, setIsUserAuth] = useState();
    const [pizzas, setPizzas] = useState([]);


    const navigate = useNavigate();
    const userData = useSelector( state => state.userInfo);


    useEffect(()=> {
        getAllDishesWithIngredient();
    }, [])

    const redirectToShoppingCart = () => {
        navigate("/pizzeria/shopping_cart")
    }

    const redirectToEditProfile = () => {
        navigate("/edit/profile")
        // navigate("/admin")
    }

    const getAllDishesWithIngredient = () => {
        axios.get(`http://localhost:8079/dish/withIngredients/all`)
            .then( response => {
                console.log(response.data)
                setPizzas(response.data);
            })
    }

    const setDataToShoppingCart = (data) => {

    }
    const productTypes = type_of_products.map((element, index)=>(
        <ProductField key={index} type={element.type} />
    ))
    
    return(
        <>
            <UserPageContainer> 
                <CompanyName>Pizzeria ShaurJano</CompanyName>
                {userData && <UserName>{`Witaj ${userData.email}`}</UserName>}
                <ProductTypeContainer>
                    {productTypes}
                </ProductTypeContainer>
                <ProductElementList products={pizzas} setDataToShoppingCart={setDataToShoppingCart}/>
            </UserPageContainer>
            <ShoppingCartIconContainer onClick={redirectToShoppingCart}>S</ShoppingCartIconContainer>
            <EditUserIconContainer onClick={redirectToEditProfile}>Edytuj profil</EditUserIconContainer>
            </>
    )
}