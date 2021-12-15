import axios from "axios";
import React, {useEffect, useState} from "react";
import { RegisterContainer, SigningContainer, Label, Input, Button, ButtonRegister, SelectList, SelectLabel} from "./RegisterPage.styled";

export const RegisterPage = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [voivodeshipValue, setVoivodeshipValue] = useState(0);
    const [cityValue, setCityValue] = useState(0);

    const [voivodeshipList, setVoivodeshipList] = useState();
    const [cityList, setCityList] = useState();

    const [voivOptions, setVoivOptions] = useState();
    const [cityOptions, setCityOptions ]= useState();

    const [credentials, setCredentials] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        voivodeship_id: 1,
        city_id: 1
    });


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
        setCredentials({
            ...credentials,
            voivodeship_id: voivodeshipValue,
            city_id : cityValue
        })
        console.log(credentials)
        axios.post("http://localhost:8079/pizza/register", credentials);
    }

    const prepareSelectListCity = (data) => {
        const options = data.map((element)=> {
            const obj = {
                label: "",
                value: ""
            };
            obj.label = element.city_name;
            obj.value = element.id_city;

            return obj;
        })
        console.log(options)
        return options;
    }

    const prepareSelectListVoiv = (data) => {
        const options = data.map((element)=> {
            const obj = {
                label: "",
                value: ""
            };
            obj.label = element.voivodeship_name;
            obj.value = element.voivodeship_id;

            return obj;
        })
        return options;
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
                    <Input name="password" onChange={onChange} placeholder="password"/>
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

                    <Button onClick={sendCredentials}>zarejestruj sie!</Button> 
            </SigningContainer>
        </RegisterContainer>
    )
}