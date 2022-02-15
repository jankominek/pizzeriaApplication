import React, { useEffect, useState } from "react";
import { ProductField } from "../../components/ProductField/ProductField";
import { type_of_products } from "../../utils/type_of_products";
import {UserPageContainer, CompanyName, UserName, ProductTypeContainer, ShoppingCartIconContainer, ShoppingCartContainer, EditUserIconContainer} from './UserPage.styled';
import axios from 'axios';
import {useNavigate} from 'react-router';
import { setUserInfoAction } from "../../utils/store/actions/userStateAction";
import { useDispatch, useSelector} from "react-redux";
import { ProductElementList } from "../../components/productElementList/ProductElementList";
import { BackBtn } from "../../components/BackBtn/BackBtn";
import { VerificationModal } from "../../components/VerificationModal/VerificationModal";
import { LogOutBtn } from "../../components/LogOutBtn/LogOutBtn";

export const UserPage = (props) => {
    
    const [pizzas, setPizzas] = useState([]);
    const [isVerified, setIsVerified] = useState(true);


    const navigate = useNavigate();
    const userData = useSelector( state => state.userInfo);
    const dispatch = useDispatch();


    useEffect(()=> {
        getAllDishesWithIngredient();
    }, [])

    useEffect(()=>{
        setIsVerified(userData.isVerified);
    }, [userData])

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
                {userData && <UserName>{`Witaj ${userData.name}`}</UserName>}
                <ProductTypeContainer>
                    
                </ProductTypeContainer>
                <ProductElementList products={pizzas} setDataToShoppingCart={setDataToShoppingCart}/>
            </UserPageContainer>
            <ShoppingCartIconContainer onClick={redirectToShoppingCart}>S</ShoppingCartIconContainer>
            <EditUserIconContainer onClick={redirectToEditProfile}>Edytuj profil</EditUserIconContainer>
            <LogOutBtn marginLeft={15}/>

            </>
    )
}