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
import {SuccessComponent} from '../../utils/successfullComponent/SuccessComponent'

export const Login = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""})
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdminLoggedin, setIsAdminLoggedIn] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState();
    const [isVerified, setIsVerified] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const [isRedirectPosible, setIsRedirectPossible] = useState(false);
    const [errorMess, setErrorMess] = useState("");
    const [showSuccessComponent, setSuccessComponent] = useState(false);
    const [showErrorComponent, setErrorComponent] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        isLoggedIn && isVerified && isRedirectPosible && !isAdminLoggedin && navigate("/pizzeria");
        isLoggedIn && isRedirectPosible && isAdminLoggedin && navigate("/admin");
    }, [isLoggedIn, isVerified, isRedirectPosible, isAdminLoggedin])
    const redirectToRegister = () => {
        navigate('/register');
    }
 
    const logInUser = () => {
        setErrorMess("");
        axios.post("http://localhost:8079/pizza/login", credentials)
        .then(response => {
            if(!response.data){
                setErrorMess("Błedny email lub hasło");
                showErrorComponent(true);
            }
            if(response.data){
                setSuccessComponent(true);
            }
            if(response.data && response.data === 'KLIENT'){
                setIsLoggedIn(true);
            }
            if(response.data && response.data ==='ADMIN'){
                setIsAdminLoggedIn(true);
                setIsLoggedIn(true);
            }
            getUserInfo(credentials.email, response.data)
        }).catch( error => {
            setErrorComponent(true);
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
                if(!data.isVerified) setIsVerified(false);
                // if(data.isVerified) setIsRedirectPossible(true); ////////////////////////////////////////////////////////

                console.log("=======")
                console.log("isLoggedIn : ", isLoggedIn);
        console.log("isVerified : ", isVerified)
        console.log("isRedirectPosible : ", isRedirectPosible)
        console.log("isAdminLoggedin : ", !isAdminLoggedin)
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

    const closeSuccErrorComponent = () => {
        setSuccessComponent(false);
        setErrorComponent(false);
        console.log("isLoggedIn : ", isLoggedIn);
        console.log("isVerified : ", isVerified)
        console.log("isRedirectPosible : ", isRedirectPosible)
        console.log("isAdminLoggedin : ", !isAdminLoggedin)
        setIsRedirectPossible(true);
        // console.log("showSuccessComponent : ", !showSuccessComponent)
        // console.log("showErrorComponent : ", !showErrorComponent)
        // isLoggedIn && isVerified && isRedirectPosible && !isAdminLoggedin && navigate("/pizzeria");
        // isLoggedIn && isAdminLoggedin && navigate("/admin");
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
            {showSuccessComponent && <SuccessComponent message={"Logowanie pomyślne !"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
        {showErrorComponent && <ErrorComponent message={"Logowanie nie powiodło się!"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
        </LoginContainer>
    )
}

// const [showSuccessComponent, setSuccessComponent] = useState(false);
//     const [showErrorComponent, setErrorComponent] = useState(false);

//     {showSuccessComponent && <SuccessComponent message={"Zamówienie zrealizowane poprawnie"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
//         {showErrorComponent && <ErrorComponent message={"Zamówienie nie zostało zrealizowane"} closeSuccErrorComponent={closeSuccErrorComponent}/>}

//         const closeSuccErrorComponent = () => {
//             setSuccessComponent(false);
//             setErrorComponent(false);
//             navigate('/pizzeria')
//         }