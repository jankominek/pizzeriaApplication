import styled from "styled-components";
import { EditProfile } from "../../EditProfile/EditProfile";

export const AdminPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TableOptionsContainer = styled.div`
    padding: 1rem 1rem;
    // border: 1px solid black;
    display: flex;
`

export const OptionField = styled.div`
    padding: 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    margin: 0 1rem;
    cursor: pointer;
    background: ${props => props.isSelected? "#D0D0D0" : "white"};
`

export const TableWrapper = styled.div`
    width: 50rem;
    height: 20rem;
    box-sizing: border-box;
`

export const AddEmployeeBtn = styled.div`
    cursor: pointer;
    width: 10rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    left: 0;
    margin: 1rem 1rem;
`

export const AllEployeeBtn = styled.div`
    cursor: pointer;
    width: 10rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    left: 12rem;
    margin: 1rem 1rem;
`
