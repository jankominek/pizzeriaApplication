import axios from "axios";
import React, {useEffect, useState} from "react";
import { registerValidation } from "../../utils/validation";
import { RegisterContainer, SigningContainer, Label, Input, Button, ButtonRegister, SelectList, SelectLabel} from "./RegisterPage.styled";
import {PError} from '../../components/Login/Login.styled'
import { useNavigate } from 'react-router';
import { SuccessComponent } from "../../utils/successfullComponent/SuccessComponent";
import { ErrorComponent } from "../../utils/errorComponent/ErrorComponent";
export const RegisterPage = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [voivodeshipValue, setVoivodeshipValue] = useState(1);
    const [cityValue, setCityValue] = useState(1);

    const [voivodeshipList, setVoivodeshipList] = useState();
    const [cityList, setCityList] = useState();

    const [voivOptions, setVoivOptions] = useState();
    const [cityOptions, setCityOptions ]= useState();

    const [credentials, setCredentials] = useState();

    const [registerErrorMessage, setRegisterErrorMessage] = useState();

    const [showSuccessComponent, setSuccessComponent] = useState(false);
    const [showErrorComponent, setErrorComponent] = useState(false);

    const [canRedirect, setCanRedirect] = useState(false);

    const navigate = useNavigate();
    // {
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     password: "",
    //     voivodeship_id: 1,
    //     city_id: 1
    // }


    useEffect( () => {
        axios.get("http://localhost:8079/city/all").then( (response) => {
            console.log("cities : ", response.data)
            const options = prepareSelectListCity(response.data);
            console.log("options: ", options)
            setCityOptions(options);
        });

        axios.get("http://localhost:8079/voivodeship/all").then( (response) => {
            console.log(response.data)
            const options = prepareSelectListVoiv(response.data);
            setVoivOptions(options);
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
        console.log("clicked")
        const objectToSend = {
            ...credentials,
            voivodeship_id: voivodeshipValue,
            city_id : cityValue
        }
        const [validationResult, message] = registerValidation(objectToSend);
        if(validationResult){
            console.log("IN POST METHOD")
            axios.post("http://localhost:8079/pizza/register", objectToSend)
                .then((response)=>{
                    if(!response.data){
                        setErrorComponent(true);
                    }
                    if(response.data){
                        setCityValue(1);
                        setVoivodeshipValue(1);
                        setCanRedirect(true);
                        setSuccessComponent(true);
                    }
                    console.log("REgister response : ", response.data)
                })
        }else{
            setRegisterErrorMessage(message)
        }        
    }

    const prepareSelectListCity = (data) => {
        const options = data.map((element)=> {
            const obj = {
                label: "",
                value: ""
            };
            obj.label = element.cityName;
            obj.value = element.cityId;

            return obj;
        })
        console.log("options city : ", options)
        return options;
    }

    const prepareSelectListVoiv = (data) => {
        const options = data.map((element)=> {
            const obj = {
                label: "",
                value: ""
            };
            obj.label = element.voivodeshipName;
            obj.value = element.voivodeshipId;

            return obj;
        })
        console.log("options voiv : ", options)
        return options;
    }

        const closeSuccErrorComponent = () => {
            setSuccessComponent(false);
            setErrorComponent(false);
            console.log("can be redirect : ", canRedirect)
            canRedirect && navigate("/login");
        }

    const onChangeSelectListVoiv = (value) => {
        setVoivodeshipValue(value.target.value);
    }
    const onChangeSelectListCity = (value) => {
        setCityValue(value.target.value);
    }

    return(
        <RegisterContainer>
            <SigningContainer>
                    <Label>Rejestracja</Label>
                    <Input name="firstname" onChange={onChange} placeholder="firstname"/>
                    <Input name="lastname" onChange={onChange} placeholder="lastname"/>
                    <Input name="email" onChange={onChange} placeholder="email"/>
                    <Input type="password" name="password" onChange={onChange} placeholder="password"/>
                    <SelectLabel>Województwo</SelectLabel>
                    <SelectList onChange={onChangeSelectListVoiv}>
                        {voivOptions && voivOptions.map((e)=> (
                            <option value={e.value}>{e.label}</option>
                        ))}
                    </SelectList>
                    <SelectLabel>Miasto</SelectLabel>
                    <SelectList onChange={onChangeSelectListCity}>
                    {cityOptions && cityOptions.map((e)=> (
                            <option value={e.value}>{e.label}</option>
                        ))}
                    </SelectList>
                    {registerErrorMessage && <PError>{registerErrorMessage}</PError>}

                    <Button onClick={sendCredentials}>zarejestruj sie!</Button> 
            </SigningContainer>
             {showSuccessComponent && <SuccessComponent message={"Rejestracja zrealizowana poprawnie !"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
         {showErrorComponent && <ErrorComponent message={"Użytkownik o takim samym adresie email już istnieje"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
        </RegisterContainer>
    )
}
