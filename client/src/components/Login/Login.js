import {useEffect, useState} from 'react';
import {SigningContainer, LoginContainer, Label, Button, ButtonRegister, PError} from './Login.styled';
import {Input} from './Login.styled';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {ErrorComponent} from '../../utils/errorComponent/ErrorComponent';
import { useDispatch } from 'react-redux';
import { setUserInfoAction } from "../../utils/store/actions/userStateAction";
import { emailValidation } from '../../utils/validation';

export const Login = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""})
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            getUserInfo(credentials.email)
            if(response.status == 200) console.log("correct login")
        }).catch( error => {
              if(error.response.status == 500){
                  console.log("Error message");
                    <ErrorComponent message={"Błądne dane w formularzu"}/>
              }
        })
    }

    const getUserInfo = (email) => {
        axios.get(`http://localhost:8079/pizza/getUserInfo/${email}`)
            .then( response => {
                const data = response.data;
                const userInfoData = {
                    userId: data.userId,
                    email: data.email,
                    role : data.type,
                    isVerified: data.isVerified
                }
                dispatch(setUserInfoAction(userInfoData))
            })
    }

    const sendCredentials = () => {
        if(credentials.email !== "" && credentials.password !== ""){
            setEmailErrorMessage();
            console.log(credentials)
            const emailValidationResult = emailValidation(credentials.email);
            if(emailValidationResult){
                logInUser();
            }else{
                setEmailErrorMessage("Błedny format adresu email");
            }
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
                    {emailErrorMessage && <PError>{emailErrorMessage}</PError>}
                    <Input name="password" onChange={onChange} placeholder="password"/>
                    <Button onClick={sendCredentials}>Log in</Button> 
                    <ButtonRegister onClick={redirectToRegister}>Register</ButtonRegister>
            </SigningContainer>
        </LoginContainer>
    )
}