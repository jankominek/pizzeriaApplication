import react, {useState} from 'react';
import {SigningContainer} from './Register.styled';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import { Flex } from "../../components/generalStyledComponents/generalStyledComponents";
import axios from 'axios';

export const Register = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""})

    const registerUser = () => {
        axios.post("http://localhost:8079/pizza/register", credentials)
        .then( response => {
            console.log(response);
        })
    }

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const sendCredentials = () => {
        if(credentials.email !== "" && credentials.password !== ""){
            registerUser();
        }
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
                    <button onClick={sendCredentials}>register</button> 
                </SigningContainer>
        </>
    )
}