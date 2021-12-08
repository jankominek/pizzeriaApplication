import React from "react";
import { StartPageContainer, SigningContainer } from "./StartPage.styled";
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