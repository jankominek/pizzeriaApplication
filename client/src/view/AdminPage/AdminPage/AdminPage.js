import { Table } from "../adminComponents/table"
import CollapsibleTable from "../adminComponents/table"
import BasicTable from "../adminComponents/table"
import { AdminPageContainer, OptionField, TableOptionsContainer, TableWrapper } from "./AdminPage.styles"


export const AdminPage = () => {


    return(
        <AdminPageContainer>
        
            <TableOptionsContainer>
                <OptionField>Zamówienia do zrealizowania</OptionField>
                <OptionField>Zamówienia w trakcie realizacji</OptionField>
                <OptionField>Zamówienia ukończone</OptionField>
            </TableOptionsContainer>
            <Table />
            
                
        </AdminPageContainer>

    )
}