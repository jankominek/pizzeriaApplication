import { EmployeeTable } from "./adminComponents/EmployeeTable";
import { EmpListCloseBtn, EmpListModalContainer, EmpListWrapper } from "./EmployeeListModal.styled"

const columnsEmp = ['ID', 'Imię', 'Nazwisko', 'Email', 'miasto', 'województwo', ]

const columnsSizesEmp = ['10rem', '10rem', '10rem', '14rem',"14rem", "14rem"];

export const EmployeeListModal = (props) => {

    return(
        <EmpListWrapper>
            <EmpListModalContainer>
                <EmployeeTable columns={columnsEmp} columnsSizes={columnsSizesEmp}/>
                <EmpListCloseBtn onClick={props.onCloseEmpList}>Zamknij</EmpListCloseBtn>
            </EmpListModalContainer>
        </EmpListWrapper>
    )
}