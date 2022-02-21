import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackBtn } from "../../components/BackBtn/BackBtn";
import { ErrorComponent } from "../../utils/errorComponent/ErrorComponent";
import { setUserInfoAction } from "../../utils/store/actions/userStateAction";
import { SuccessComponent } from "../../utils/successfullComponent/SuccessComponent";
import { emailValidation } from "../../utils/validation";
import { SelectLabel, SelectList } from "../RegisterPage/RegisterPage.styled";
import { Button, EditProfileContainer, EditWrapper, ErrorMessage, Input, InputPassword, InputWrapper, Label, PEditName } from './EditProfile.styled'


export const EditProfile = () => {

    const [userInformation, setUserInformation] = useState({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
    });
    const dispatch = useDispatch();
    const [voivodeshipList, setVoivodeshipList] = useState();
    const [cityList, setCityList] = useState();
    const [voivodeshipValue, setVoivodeshipValue] = useState();
    const [cityValue, setCityValue] = useState();
    const [voivOptions, setVoivOptions] = useState();
    const [cityOptions, setCityOptions ]= useState();
    const [errorMessage, setErrorMessage] = useState("");

    const [showSuccessComponent, setSuccessComponent] = useState(false);
        const [showErrorComponent, setErrorComponent] = useState(false);

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

    const validation = (dataToSend) => {
        setErrorMessage("")
        if(!dataToSend.firstname || !dataToSend.lastname || !dataToSend.email){
            return false;
        }
        const flnameRegex = new RegExp("^[A-Za-z ]+$")
        const fnameRes = flnameRegex.test(dataToSend.firstname);
        if(!fnameRes){
            setErrorMessage("Pole firstname powinno zawierac tylko litery")
            return false;
        }

        const lnameRes = flnameRegex.test(dataToSend.lastname); 
        if(!lnameRes){
            setErrorMessage("Pole lastname powinno zawierac tylko litery")
            return false;
        }
        const emailRes = emailValidation(dataToSend.email);
        if(!emailRes){
            setErrorMessage("Niepoprawny format adresu email")
            return false;
        }


        return fnameRes && lnameRes && emailRes;
    }

    const getUserInfo = (email) => {
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
                dispatch(setUserInfoAction(userInfoData))
            })
        }
        

    const updateUser = () => {

        const dataToSend = {
            ...userInformation,
            voivodeship_id : voivodeshipValue,
            city_id : cityValue
        }
        const validationResult = validation(dataToSend);
        console.log(dataToSend)
        console.log("user email : ", userInfo.email)
        userInfo?.email && validationResult && axios.post(`http://localhost:8079/pizza/updateUser/${userInfo.email}`, dataToSend)
            .then(response => {
               if(response.data){
                setSuccessComponent(true)
                getUserInfo(dataToSend.email)
               }
                if(!response.data){
                    setErrorComponent(true);
                }
            })
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

    const closeSuccErrorComponent = () => {
                    setSuccessComponent(false);
                    setErrorComponent(false);

                }
    const onChangeSelectListVoiv = (value) => {
        setVoivodeshipValue(value.target.value);
    }
    const onChangeSelectListCity = (value) => {
        setCityValue(value.target.value);
    }

    return(
        <EditProfileContainer>
            <BackBtn />
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
                    <InputPassword name="password" value={userInformation.password} onChange={onChange}/>
                </InputWrapper>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
            {showSuccessComponent && <SuccessComponent message={"Pomyślnie zaaktualizowano użytkownika"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
        {showErrorComponent && <ErrorComponent message={"Użytkownik o takim adresie email istnieje"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
        </EditProfileContainer>
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