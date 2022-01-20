import styled from "styled-components";

export const TableWrapper = styled.div`
    width: 60rem;
    height: 30rem;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    border-radius: 5px; 
    // align-items: center;
`
export const RowTable = styled.div`
    width: 96%;
    height: 3rem;
    border: 1px solid red;
    border-radius: 2.5px;
    margin: .5rem 0;
`
export const ColumnWrapper = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid black;
`
export const ColumnRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-grow: 1;   
    height: 2rem;
    // border: 1px solid black;
`