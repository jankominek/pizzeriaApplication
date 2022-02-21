import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorComponent } from "../../../utils/errorComponent/ErrorComponent";
import { SuccessComponent } from "../../../utils/successfullComponent/SuccessComponent";
import { BorderRight, ColumnRow, ColumnWrapper, DishInfoField, DishInfoIngredientsContainer, DishInfoName, DishInfoWrapper, IngredientField, Layer, MainWrapper, Row, RowButton, RowField, RowFlexCol, RowTable, TableWrapper } from "./EmployeeTable.styled";



export const EmployeeTable = (props) => {

    const {status, columns, columnsSizes} = props;

    const [employees, setEmployees] = useState([]);
    const [showSuccessComponent, setSuccessComponent] = useState(false);
    const [showErrorComponent, setErrorComponent] = useState(false);


    useEffect(()=>{
        getEmployees();
    },[])
    console.log("employees : ", employees)
    const columnList = columns.map( (col, i) => (
        <>
            <ColumnRow widthField={columnsSizes[i]}>{col}</ColumnRow>
        </>
    ))

    const getEmployees = () => {
        axios.get(`http://localhost:8079/employee/all`)
            .then(response => {
                setEmployees(response.data)
            }) 
    }

    const deleteEmployee = (e) => {
        const empId = e.target.id;

        axios.post(`http://localhost:8079/employee/delete/${Number(empId)}`)
            .then(response => {
                console.log("responsee:", response.data)
                if(response.data){
                    const newListEmp = employees.filter((emp )=> emp.employeeId != empId);
                    setEmployees(newListEmp);
                    setSuccessComponent(true);
                }
                if(!response.data) setErrorComponent(true);
            })
    }

        const closeSuccErrorComponent = () => {
            setSuccessComponent(false);
            setErrorComponent(false);
        }


    const rowList = employees.map((emp, i) => (
        <>
        <RowFlexCol >
        <Row isOdd={Boolean(i%2)}>
            <RowField widthField="10rem">{emp.employeeId}</RowField>
            <RowField widthField="10rem">{emp.name}</RowField>
            <RowField widthField="10rem">{emp.lastName}</RowField>
            <RowField widthField="14rem">{emp.email}</RowField>
            <RowField widthField="14rem">{emp.voivodeship.voivodeshipName}</RowField>
            <RowField widthField="14rem">{emp.city.cityName}</RowField>
            <RowButton widthField="9rem" id={emp.employeeId} onClick={deleteEmployee}>Usuń</RowButton>
        </Row>
        </RowFlexCol>
        </>
    ))



    return (
        <MainWrapper>
            <TableWrapper>
                <RowTable>
                    <ColumnWrapper>
                        {columnList}
                    </ColumnWrapper>
                    <>
                     {rowList}
                    </>
                   
                </RowTable>
            </TableWrapper>
                 {showSuccessComponent && <SuccessComponent message={"Pomyślnie usunięto pracownika"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
         {showErrorComponent && <ErrorComponent message={"Nie można tego pracownika usunąć"} closeSuccErrorComponent={closeSuccErrorComponent}/>}
        </MainWrapper>
    )
}

