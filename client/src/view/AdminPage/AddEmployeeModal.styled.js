import styled from "styled-components";

export const EmployeeWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center; 
`
export const AddEmployeeContainer = styled.div`
    width: 50rem;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background: gray;
`
export const InputEmployee = styled.input`
    width: 15rem;
    margin: .5rem 0;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid gray;
    padding: .5rem .5rem;
    &:focus {
        outline: none;
    }
`

export const Button = styled.div`
    width: 5rem;
    cursor: pointer;
    height: 2rem;
    background: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin: 2rem 1rem;
`
export const Flex = styled.div`
    display: flex;
`