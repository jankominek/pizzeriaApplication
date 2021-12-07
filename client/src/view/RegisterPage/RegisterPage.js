import axios from "axios";
import React, {useEffect, useState} from "react";
import { RegisterContainer, SigningContainer, Label, Input, Button, ButtonRegister, SelectList, SelectLabel} from "./RegisterPage.styled";

export const RegisterPage = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [voivodeship, setVoivodeship] = useState("");
    const [city, setCity] = useState("");

    const [voivodeshipList, setVoivodeshipList] = useState();
    const [cityList, setCityList] = useState();

    const [credentials, setCredentials] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        voivodeship: "",
        city: ""
    });

    useEffect( () => {
        axios.get("http://localhost:8079/city/all").then( (response) => {
            console.log(response.data)
        }).catch( err => {
            console.log(err)
        })

        axios.get("http://localhost:8079/voivodeship/all").then( (response) => {
            console.log(response.data)
        }).catch( err => {
            console.log(err)
        })

    }, [])

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const sendCredentials = () => {

    }

    return(
        <RegisterContainer>
            <SigningContainer>
                    <Label>Rejestracja</Label>
                    <Input name="firstname" onChange={onChange} placeholder="firstname"/>
                    <Input name="lastname" onChange={onChange} placeholder="lastname"/>
                    <Input name="email" onChange={onChange} placeholder="email"/>
                    <Input name="password" onChange={onChange} placeholder="password"/>
                    <SelectLabel>Województwo</SelectLabel>
                    <SelectList />
                    <SelectLabel>Miasto</SelectLabel>
                    <SelectList />

                    <Button onClick={sendCredentials}>zarejestruj sie!</Button> 
            </SigningContainer>
        </RegisterContainer>
    )
}