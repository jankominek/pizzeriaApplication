import axios from "axios";
import { useEffect, useState } from "react";
import { BorderRight, ColumnRow, ColumnWrapper, DishInfoField, DishInfoIngredientsContainer, DishInfoName, DishInfoWrapper, IngredientField, Layer, Row, RowButton, RowField, RowFlexCol, RowTable, TableWrapper } from "./EmployeeTable.styled";



export const EmployeeTable = (props) => {

    const {status, columns, columnsSizes} = props;

    const [employees, setEmployees] = useState([]);


    useEffect(()=>{
        getEmployees();
    },[])

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
        </Row>
        </RowFlexCol>
        </>
    ))



    return (
        <>
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
        </>
    )
}