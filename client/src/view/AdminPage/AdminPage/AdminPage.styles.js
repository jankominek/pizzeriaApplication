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
    border: 1px solid black;
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
`

export const TableWrapper = styled.div`
    width: 50rem;
    height: 20rem;
    box-sizing: border-box;
`