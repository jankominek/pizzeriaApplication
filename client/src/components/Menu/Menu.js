import React from "react";
import { menu_list } from "../../utils/menu-list";
import { AppTitle } from "../AppTitle/AppTitle";
import { MenuElement } from "../MenuElement/MenuElement";
import { MenuContainer, MenuList } from "./Menu.styled";
export const Menu = () => {

    const menuList = menu_list.map((element, index)=>(
        <MenuElement key={index} title={element.title}/>
    ))

    console.log(menu_list)
    return(
        <>
            <MenuContainer>
                <AppTitle/>
                <MenuList>
                    {menuList ? menuList : null}
                </MenuList>
            </MenuContainer>
        </>
    )
}