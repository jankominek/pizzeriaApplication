import React, { useEffect, useState } from "react";
import { Menu } from "../../components/Menu/Menu";
import { ProductField } from "../../components/ProductField/ProductField";
import { type_of_products } from "../../utils/type_of_products";
import {UserPageContainer, MainField, Flex} from './UserPage.styled';
import axios from 'axios';
import { MenuListField } from "../MenuListField/MenuListField";
import { ProductElement } from "../../components/ProductElement/ProductElement";
import { useDispatch, useSelector} from "react-redux";
import { setUserInfoAction } from "../../utils/store/actions/userStateAction";

export const UserPage = (props) => {
    
    const [isUserAuth, setIsUserAuth] = useState();

    const dispatch = useDispatch();

    useEffect(()=> {
        getUserInfo();
    }, [])
    const state = useSelector( state => state)
    console.log("state : ", state)
    
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
     
    useEffect(()=>{
    }, [])

    return(
        <>
        {}
            <UserPageContainer>
                <Menu />
                <MainField>
                    <Flex>{productTypes ? productTypes : null}</Flex>
                    <MenuListField>
                        <ProductElement />
                    </MenuListField>
                </MainField>
            </UserPageContainer>
        </>
    )
}