import { Table } from "../adminComponents/table"
import CollapsibleTable from "../adminComponents/table"
import BasicTable from "../adminComponents/table"
import { AdminPageContainer, OptionField, TableOptionsContainer, TableWrapper } from "./AdminPage.styles"
import axios from "axios"
import { useEffect, useState } from "react"


export const AdminPage = () => {

    const [selectedStatus, setSelectedStatus] = useState(-1);

    const [selectedOrders, setSelectedOrders] = useState([]);

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

    const changeSelectedStatus = (event) => {
        setSelectedStatus(event.target.id)
    }
    console.log("selected status: ", selectedStatus)
    return(
        <AdminPageContainer>
        
            <TableOptionsContainer>
                <OptionField onClick={changeSelectedStatus} id={-1} isSelected={ selectedStatus == -1 ? true : false}>Zamówienia do zrealizowania</OptionField>
                <OptionField onClick={changeSelectedStatus} id={0} isSelected={ selectedStatus == 0 ? true : false}>Zamówienia w trakcie realizacji</OptionField>
                <OptionField onClick={changeSelectedStatus} id={1} isSelected={ selectedStatus == 1 ? true : false}>Zamówienia ukończone</OptionField>
            </TableOptionsContainer>
            {selectedOrders && <Table orders={selectedOrders} status={selectedStatus}/>}
            
                
        </AdminPageContainer>

    )
}