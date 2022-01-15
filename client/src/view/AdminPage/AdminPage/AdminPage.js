import BasicTable from "../adminComponents/table"
import { AdminPageContainer, TableWrapper } from "./AdminPage.styles"


export const AdminPage = () => {


    return(
        <AdminPageContainer>
            <TableWrapper>
                <BasicTable />
            </TableWrapper>
        </AdminPageContainer>

    )
}