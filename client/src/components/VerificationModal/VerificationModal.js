import axios from "axios"
import { useEffect, useState } from "react"
import { ErrorMessage, TitleModal, VerificationButton, VerificationInput, VerificationModalField, VerificationModalWrapper } from "./VerificationModal.styled"


export const VerificationModal = (props) => {

    const [userVerification, setUserVerification] = useState({v_code: "", email : ""});
    const [errorMessage, setErrorMessage] = useState("");
    
    useEffect(()=>{
        setUserVerification({
            ...userVerification,
            email: props.email
        })
    },[])

    const onChange = (e) => {
        if(errorMessage) setErrorMessage("");
        setUserVerification({
            ...userVerification,
            v_code: e.target.value
        })
    }

    const verify = () => {

        if(userVerification.v_code !== ""){
            axios.post("http://localhost:8079/pizza/verification", userVerification)
                .then( (response) => {
                    console.log("response data : ", response.data)
                    if(!response.data){
                        setErrorMessage("Zły kod weryfikacyjny");
                    }
                    if(response.data){
                        props.verifyAccount();
                    }
                })
        }
    }
    return(
        <VerificationModalWrapper>
            <VerificationModalField>
                <TitleModal>
                    Witaj, {props.name} 
                </TitleModal>
                <TitleModal>
                    proszę zweryfikuj swoje konto! 
                </TitleModal>
                <VerificationInput onChange={onChange}/>
                <VerificationButton onClick={verify}>zweryfikuj</VerificationButton>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </VerificationModalField>
        
        </VerificationModalWrapper>
    )
}