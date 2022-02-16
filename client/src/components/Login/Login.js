import {useEffect, useState} from 'react';
import {SigningContainer, LoginContainer, Label, Button, ButtonRegister, PError} from './Login.styled';
import {Input} from './Login.styled';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {ErrorComponent} from '../../utils/errorComponent/ErrorComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfoAction } from "../../utils/store/actions/userStateAction";
import { emailValidation } from '../../utils/validation';
import { VerificationModal } from '../VerificationModal/VerificationModal';

export const Login = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""})
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdminLoggedin, setIsAdminLoggedIn] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState();
    const [isVerified, setIsVerified] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const [isRedirectPosible, setIsRedirectPossible] = useState(false);
    const [errorMess, setErrorMess] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        isLoggedIn && isVerified && isRedirectPosible && !isAdminLoggedin && navigate("/pizzeria");
        isLoggedIn && isAdminLoggedin && navigate("/admin");
    }, [isLoggedIn, isVerified, isRedirectPosible])
    const redirectToRegister = () => {
        navigate('/register');
    }
    console.log(isLoggedIn)
    console.log(isVerified)
    console.log(isRedirectPosible)
    const logInUser = () => {
        setErrorMess("");
        axios.post("http://localhost:8079/pizza/login", credentials)
        .then(response => {
            console.log("RESP : ", response.data)
            if(!response.data){
                setErrorMess("Błedny email lub hasło");
            }
            if(response.data && response.data === 'KLIENT'){
                setIsLoggedIn(true);
            }
            if(response.data && response.data ==='ADMIN'){
                setIsAdminLoggedIn(true);
                setIsLoggedIn(true);
            }
            getUserInfo(credentials.email, response.data)
            if(response.status == 200) console.log("correct login")
        }).catch( error => {
              if(error.response.status == 500){
                  console.log("Error message");
                    <ErrorComponent message={"Błądne dane w formularzu"}/>
              }
        })
    }

    const getUserInfo = (email, role) => {
        if(role == 'KLIENT'){
            axios.get(`http://localhost:8079/pizza/getUserInfo/${email}`)
            .then( response => {
                const data = response.data;
                const userInfoData = {
                    userId: data.userId,
                    email: data.email,
                    role : data.type,
                    isVerified: data.isVerified,
                    name: data.name
                }
                setUserInfo(userInfoData)
                if(userInfoData.isVerified) setIsRedirectPossible(true);
                if(!userInfoData.isVerified) setIsVerified(false);
                dispatch(setUserInfoAction(userInfoData))
            })
        }
        if(role == 'ADMIN'){
            axios.get(`http://localhost:8079/employee/getEmployeeInfo/${email}`)
            .then( response => {
                const data = response.data;
                const userInfoData = {
                    userId: data.employeeId,
                    email: data.email,
                    name: data.name,
                    lastName : data.lastName,
                    role : data.role
                }
                dispatch(setUserInfoAction(userInfoData))
            })
        }
        
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

    const verifyAccount = () =>{
        getUserInfo(userInfo.email, 'KLIENT')
        setIsVerified(true);
    }

    return(
        <LoginContainer>
            <SigningContainer>
                    <Label>Login</Label>
                    <Input name="email" onChange={onChange} placeholder="email"/>
                    {emailErrorMessage && <PError>{emailErrorMessage}</PError>}
                    <Input type="password" name="password" onChange={onChange} placeholder="password"/>
                    {errorMess && <PError>{errorMess}</PError>}
                    <Button onClick={sendCredentials}>Log in</Button> 
                    <ButtonRegister onClick={redirectToRegister}>Register</ButtonRegister>
            </SigningContainer>
            {!isVerified && isLoggedIn && <VerificationModal name={userInfo.name} email={userInfo.email} verifyAccount={verifyAccount} />}
            
        </LoginContainer>
    )
}