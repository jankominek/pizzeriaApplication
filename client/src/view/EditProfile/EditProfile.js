import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectLabel, SelectList } from "../RegisterPage/RegisterPage.styled";
import { Button, EditProfileContainer, EditWrapper, Input, InputWrapper, Label, PEditName } from './EditProfile.styled'


export const EditProfile = () => {

    const [userInformation, setUserInformation] = useState({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
    });
    const [voivodeshipList, setVoivodeshipList] = useState();
    const [cityList, setCityList] = useState();
    const [voivodeshipValue, setVoivodeshipValue] = useState();
    const [cityValue, setCityValue] = useState();
    const [voivOptions, setVoivOptions] = useState();
    const [cityOptions, setCityOptions ]= useState();

    const userInfo = useSelector(state => state.userInfo)

    useEffect(() => {
        userInfo && getUserInformation(userInfo.email);
        console.log(userInfo)
    }, [])

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

    const updateUser = () => {

        const dataToSend = {
            ...userInformation,
            voivodeship_id : voivodeshipValue,
            city_id : cityValue
        }
        console.log(dataToSend)
        console.log("user email : ", userInfo.email)
        userInfo?.email && axios.post(`http://localhost:8079/pizza/updateUser/${userInfo.email}`, dataToSend)
        // console.log("userToUpdate : ", userToUpdate)
    }

    const getUserInformation = (email) => {
        axios.get(`http://localhost:8079/pizza/user/${email}/information`)
            .then(response => {
                const data = response.data;
                console.log("data : ",data)
                setUserInformation(data)
                setVoivodeshipValue(data.voivodeship_id)
                setCityValue(data.city_id)
            })
    }

    const onChange = (event) => {
        console.log(event)
        setUserInformation({
            ...userInformation,
            [event.target.name] : event.target.value
        })
    }
    const onChangeSelectListVoiv = (value) => {
        setVoivodeshipValue(value.target.value);
    }
    const onChangeSelectListCity = (value) => {
        setCityValue(value.target.value);
    }

    return(
        <EditProfileContainer>
            <EditWrapper>
                <PEditName>Edycja profilu użytkownika</PEditName>
                <InputWrapper>
                    <Label>Firstname: </Label>
                    <Input name="firstname" value={userInformation.firstname} onChange={onChange}/>
                </InputWrapper>
                <InputWrapper>
                    <Label>Lastname: </Label>
                    <Input name="lastname" value={userInformation.lastname} onChange={onChange}/>
                </InputWrapper>
                <InputWrapper>
                    <Label>Email: </Label>
                    <Input name="email" value={userInformation.email} onChange={onChange}/>
                </InputWrapper>
                <InputWrapper>
                    <Label>Password: </Label>
                    <Input name="password" value={userInformation.password} onChange={onChange}/>
                </InputWrapper>
                
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
                <Button onClick={updateUser}>Zaaktualizuj</Button>
            </EditWrapper>
        </EditProfileContainer>
    )
}