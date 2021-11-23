import React, { useEffect, useState } from "react";
import { Menu } from "../../components/Menu/Menu";
import { ProductField } from "../../components/ProductField/ProductField";
import { type_of_products } from "../../utils/type_of_products";
import {UserPageContainer, MainField, Flex} from './UserPage.styled';
import axios from 'axios';
import { MenuListField } from "../MenuListField/MenuListField";
import { ProductElement } from "../../components/ProductElement/ProductElement";

export const UserPage = () => {

    const productTypes = type_of_products.map((element, index)=>(
        <ProductField key={index} type={element.type} />
    ))
    const [x, setX] = useState();   
    useEffect(()=>{
        axios.get('http://localhost:8080/root/hello')
            .then(response => setX(response.data));
    }, [])
    return(
        <>
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