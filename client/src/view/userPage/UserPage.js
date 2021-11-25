import React, { useEffect, useState } from "react";
import { Menu } from "../../components/Menu/Menu";
import { ProductField } from "../../components/ProductField/ProductField";
import { type_of_products } from "../../utils/type_of_products";
import {UserPageContainer, MainField, Flex} from './UserPage.styled';
import axios from 'axios';
import { MenuListField } from "../MenuListField/MenuListField";
import { ProductElement } from "../../components/ProductElement/ProductElement";

export const UserPage = () => {

    const [isUserAuth, setIsUserAuth] = useState();

    useEffect(()=> {

    })

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