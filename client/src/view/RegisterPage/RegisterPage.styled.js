import styled from "styled-components";
import { colors } from "../../utils/theme";

export const RegisterContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: ${colors.latte};
`
export const SigningContainer = styled.div`
    width: 40%;
   border: 1px solid black;
   border-radius: 10px;
   box-sizing: border-box;
   padding: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`; 
export const Input = styled.input`
    width: 50%;
    height: 2rem;
    padding: 5px 10px;
    margin-top: 5%;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    &:focus{
        outline: none;
    }
`
export const Label = styled.label`
    font-size: 2rem;
`

export const SelectLabel = styled.label`
    margin-top: 2.5%;
    font-size: 1rem;
`

export const Button = styled.button`
    width: 20%;
    height: 1.5rem;
    padding: 5px 10px;
    margin-top: 10%;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    background-color: ${colors.lightRed};
`
export const SelectList = styled.select`
    width: 30%;
    height: 2rem;
    padding: 5px 10px;
    // margin-bottom: 5%;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
`
export const ButtonRegister = styled.button`
    width: 20%;
    height: 1.5rem;
    padding: 5px 10px;
    margin-top: 5%;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    background-color: ${colors.lightRed};
`