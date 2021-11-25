import React, {useState} from "react";
import { Flex } from "../../components/generalStyledComponents/generalStyledComponents";
import { StartPageContainer, SigningContainer } from "./StartPage.styled";
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import { Login } from "../../components/Login/Login";
import { Register } from "../../components/Register/Register";
import { UserPage } from "../userPage/UserPage";
import {useNavigate} from 'react-router';

export const StartPage = () => {

    const navigate = useNavigate();

    const loginNavigate = () => {
        navigate("/login");
    }

    const checkIfLoggedIn = (value) => {
        // setIsLoggedIn(value)
    }

    return(
        <>
            <StartPageContainer>
                {/* {isLoggedIn ? <UserPage /> : <Login  isLoggedIn={checkIfLoggedIn}/>} */}
                <SigningContainer>
                    <label>Please login for order pizza</label>
                    <button onClick={loginNavigate}>Login</button>
                    <button>Register</button>
                </SigningContainer>
            </StartPageContainer>
        </>
    )
}