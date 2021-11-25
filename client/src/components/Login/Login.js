import react, {useEffect, useState} from 'react';
import {SigningContainer} from './Login.styled';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import { Flex } from "../../components/generalStyledComponents/generalStyledComponents";
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';

export const Login = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""})
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        if(isLoggedIn) navigate("/pizzeria")
    }, [isLoggedIn])

    const logInUser = () => {
        axios.post("http://localhost:8079/pizza/login", credentials)
        .then(response => {
            setIsLoggedIn(response.data)
        })
    }

    const sendCredentials = () => {
        if(credentials.email !== "" && credentials.password !== ""){
            logInUser();
        }
    }

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    return(
        <>
            <SigningContainer>
                    <label>login form</label>
                    <Flex>
                        <label>email</label>
                        <input name="email" onChange={onChange}/>
                    </Flex>
                    <Flex>
                        <label>password</label>
                        <input name="password" onChange={onChange}/>
                    </Flex>
                    <button onClick={sendCredentials}>Log in</button> 
                    <NavLink to="/register">register link</NavLink>
            </SigningContainer>
        </>
    )
}