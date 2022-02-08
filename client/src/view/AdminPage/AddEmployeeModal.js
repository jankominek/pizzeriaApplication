import axios from "axios";
import { useEffect, useState } from "react";
import { SelectLabel, SelectList } from "../RegisterPage/RegisterPage.styled"
import { AddEmployeeContainer, Button, EmployeeWrapper, Flex, InputEmployee } from "./AddEmployeeModal.styled"


export const AddEmployeeModal = (props) => {

    const [voivodeshipValue, setVoivodeshipValue] = useState(1);
    const [cityValue, setCityValue] = useState(1);

    const [voivodeshipList, setVoivodeshipList] = useState();
    const [cityList, setCityList] = useState();

    const [credentials, setCredentials] = useState();

    const [voivOptions, setVoivOptions] = useState();
    const [cityOptions, setCityOptions ]= useState();


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

    const onChangeSelectListVoiv = (value) => {
        setVoivodeshipValue(value.target.value);
    }
    const onChangeSelectListCity = (value) => {
        setCityValue(value.target.value);
    }


    const prepareAndSave = () => {
        const dataToSend = {
            ...credentials,
            voivodeship : voivodeshipValue,
            city : cityValue
        }
        props.onSave(dataToSend)
    }
    

    return(
        <EmployeeWrapper>
            <AddEmployeeContainer>
                <InputEmployee name="name" onChange={onChange} placeholder="imię.."/>
                <InputEmployee name="lastName" onChange={onChange} placeholder="nazwisko.."/>
                <InputEmployee name="email" onChange={onChange} placeholder="email.."/>
                <InputEmployee name="password" type="password" onChange={onChange} placeholder="hasło.."/>
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
                    <Flex>
                        <Button onClick={prepareAndSave}> Zapisz </Button>
                        <Button onClick={props.onClose}> Wyjdź </Button>
                    </Flex>
            </AddEmployeeContainer>
        </EmployeeWrapper>
    )
}