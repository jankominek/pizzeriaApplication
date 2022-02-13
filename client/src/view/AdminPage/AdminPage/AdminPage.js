import { Table } from "../adminComponents/table"
import CollapsibleTable from "../adminComponents/table"
import BasicTable from "../adminComponents/table"
import { AddEmployeeBtn, AdminPageContainer, AllEployeeBtn, OptionField, TableOptionsContainer, TableWrapper } from "./AdminPage.styles"
import axios from "axios"
import { useEffect, useState } from "react"
import { AddEmployeeModal } from "../AddEmployeeModal"
import { EmployeeListModal } from "../EmployeeListModal"
import { LogOutBtn } from "../../../components/LogOutBtn/LogOutBtn"


const columnsOrder = ['ID', 'adres', 'imię', 'nazwisko', 'email', 'nr.tel', 'miasto', 'województwo', 'kwota', 'Obsługuje']

const columnsSizesOrder = ['4rem', '9rem', '9rem', '9rem',"12rem", "7rem", "10rem", "10rem", "6rem", "7rem"];


export const AdminPage = () => {

    const [selectedStatus, setSelectedStatus] = useState(-1);

    const [selectedOrders, setSelectedOrders] = useState([]);

    const [isEmployeeModalShowing, setIsEmployeeModalShowing] = useState(false)

    const [isEmployeeListModalShowing, setIsEmployeeListModalShowing] = useState(false);

    useEffect(()=>{
        getOrdersBystatus(selectedStatus);
    }, [selectedStatus])

    const getOrdersBystatus = (status) => {
        axios.get(`http://localhost:8079/order/allOdersByStatus/${status}`)
            .then(response => {
                console.log("ASDASDASDASDASDA" ,response.data)
                setSelectedOrders(response.data)
            })
    }

    const saveEmployee = (emp) => {
        axios.post(`http://localhost:8079/employee/save`, emp)
    }

    const changeSelectedStatus = (event) => {
        setSelectedStatus(event.target.id)
    }

    const showEmployeeModal = () => {
        setIsEmployeeModalShowing(true);
    }

    const closeEmployeeModal = () => {
        setIsEmployeeModalShowing(false)
    }

    const saveEmployeeModal = (data) => {
            saveEmployee(data);
            setIsEmployeeModalShowing(false);
    }

    const showEmployeeList = () => {
        setIsEmployeeListModalShowing(true);
    }

    const closeEmpList = () => {
        setIsEmployeeListModalShowing(false)
    }
    
    return(
        <AdminPageContainer>
            <LogOutBtn marginLeft={2}/>
            <AddEmployeeBtn onClick={showEmployeeModal}> Dodaj pracownika</AddEmployeeBtn>
            <AllEployeeBtn onClick={showEmployeeList}> Lista pracowników </AllEployeeBtn>
            <TableOptionsContainer>
                <OptionField onClick={changeSelectedStatus} id={-1} isSelected={ selectedStatus == -1 ? true : false}>Zamówienia do zrealizowania</OptionField>
                <OptionField onClick={changeSelectedStatus} id={0} isSelected={ selectedStatus == 0 ? true : false}>Zamówienia w trakcie realizacji</OptionField>
                <OptionField onClick={changeSelectedStatus} id={1} isSelected={ selectedStatus == 1 ? true : false}>Zamówienia ukończone</OptionField>
            </TableOptionsContainer>
            {selectedOrders && <Table orders={selectedOrders} status={selectedStatus} columns={columnsOrder} columnsSizes={columnsSizesOrder}/>}
            { isEmployeeModalShowing && <AddEmployeeModal onSave={saveEmployeeModal} onClose={closeEmployeeModal}/>}
            { isEmployeeListModalShowing && <EmployeeListModal onCloseEmpList={closeEmpList}/>}
        </AdminPageContainer>

    )
}