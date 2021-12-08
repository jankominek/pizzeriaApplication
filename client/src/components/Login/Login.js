import {useEffect, useState} from 'react';
import {SigningContainer, LoginContainer, Label, Button, ButtonRegister} from './Login.styled';
import {Input} from './Login.styled';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {ErrorComponent} from '../../utils/errorComponent/ErrorComponent';

export const Login = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""})
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        if(isLoggedIn) navigate("/pizzeria")
    }, [isLoggedIn])
    const redirectToRegister = () => {
        navigate('/register');
    }
    const logInUser = () => {
        axios.post("http://localhost:8079/pizza/login", credentials)
        .then(response => {
            setIsLoggedIn(response.data)
        }).catch( error => {
              if(error.response.status == 500){
                  console.log("Error message");
                    <ErrorComponent message={"Błądne dane w formularzu"}/>
              }
        })
    }

    const sendCredentials = () => {
        if(credentials.email !== "" && credentials.password !== ""){
            console.log(credentials)
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
        <LoginContainer>
            <SigningContainer>
                    <Label>Login</Label>
                    <Input name="email" onChange={onChange} placeholder="email"/>
                    <Input name="password" onChange={onChange} placeholder="password"/>
                    <Button onClick={sendCredentials}>Log in</Button> 
                    <ButtonRegister onClick={redirectToRegister}>Register</ButtonRegister>
            </SigningContainer>
        </LoginContainer>
    )
}