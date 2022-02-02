import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Flex, InputEmployeeId, ModalContainer, ModalWrapper } from "./AddEmployeeToOrderModal.styled"
import { PasswordInput, PasswordModalContainer, PasswordModalWrapper } from "./PasswordModal.styled";


export const PasswordModal = (props) => {

    const [password, setPassword] = useState("");

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const SendIdFromModal = () => {
        props.onSaveModal(password);
    }
    return(
        <PasswordModalWrapper>
            <PasswordModalContainer>
                <PasswordInput type="password" placeholder="Wpisz hasło pracownika tego zamówienia.." onChange={onChangePassword}/>
                <Flex>
                    <Button onClick={SendIdFromModal}>Dodaj</Button>
                    <Button onClick={props.onCloseModal}>Zamknij</Button>
                </Flex>
            </PasswordModalContainer>
        </PasswordModalWrapper>
        
    )
}