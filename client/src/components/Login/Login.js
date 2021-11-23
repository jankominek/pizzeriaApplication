import react, {useState} from 'react';
import {SigningContainer} from './Login.styled';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import { Flex } from "../../components/generalStyledComponents/generalStyledComponents";
import axios from 'axios';

export const Login = (props) => {
    const {isLoggedIn} = props;

    const [credentials, setCredentials] = useState({email: "", password: ""})

    const logInUser = () => {
        axios.post("http://localhost:8079/pizza/login", credentials)
        .then(response => {
            isLoggedIn(response.data)
        })
        // isLoggedIn(true);
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
                    <Flex>
                        <label>email</label>
                        <input name="email" onChange={onChange}/>
                    </Flex>
                    <Flex>
                        <label>password</label>
                        <input name="password" onChange={onChange}/>
                    </Flex>
                    <button onClick={logInUser}>Log in</button> 
                </SigningContainer>
        </>
    )
}