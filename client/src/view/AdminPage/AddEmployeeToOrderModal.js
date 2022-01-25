import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Flex, InputEmployeeId, ModalContainer, ModalWrapper } from "./AddEmployeeToOrderModal.styled"


export const AddEmployeeToOrderModal = (props) => {

    const [userId, setUserId] = useState("");
    const [idsEmployees, setIdsEmployees] = useState([]);

    useEffect(()=>{
        getEmployees();
    }, [] );

    const getEmployees = () => {
        axios.get("http://localhost:8079/employee/all")
            .then(response => {
                const data = response.data;
                const ids = data.map( emp => emp.employeeId);
                setIdsEmployees(ids)
            })
    }
    const onChangeId = (e) => {
        setUserId(e.target.value);
    }

    const validateId = (id) => {
        if( !id) return false;
        const res = idsEmployees.some( arrId => arrId == id);
        console.log("res valid : ", res);
        return res;
    }
    const SendIdFromModal = () => {
        const validationResult = userId && validateId(userId);
        if(validationResult){
            props.onSaveModal(userId)
        }
    }
    return(
        <ModalWrapper>
            <ModalContainer>
                <InputEmployeeId placeholder="Wpisz swój identyfikator" onChange={onChangeId}/>
                <Flex>
                    <Button onClick={SendIdFromModal}>Dodaj</Button>
                    <Button onClick={props.onCloseModal}>Zamknij</Button>
                </Flex>
            </ModalContainer>
        </ModalWrapper>
        
    )
}