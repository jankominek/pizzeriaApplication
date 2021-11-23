import React, {useState} from "react";
import { Flex } from "../../components/generalStyledComponents/generalStyledComponents";
import { StartPageContainer, SigningContainer } from "./StartPage.styled";
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import { Login } from "../../components/Login/Login";
import { Register } from "../../components/Register/Register";
import { UserPage } from "../userPage/UserPage";
export const StartPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkIfLoggedIn = (value) => {
        setIsLoggedIn(value)
    }

    return(
        <>
            <StartPageContainer>
                {isLoggedIn ? <UserPage /> : <Login  isLoggedIn={checkIfLoggedIn}/>}
            </StartPageContainer>
        </>
    )
}