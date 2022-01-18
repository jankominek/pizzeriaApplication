import styled from "styled-components";
import { colors } from "../../utils/theme";

export const EditProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #fff8e7;
    display: flex;
    justify-content:center;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
    height: 2rem;
    padding: 5px 10px;
    // margin-top: 5%;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    &:focus{
        outline: none;
    }
`
export const InputPassword = styled.input.attrs({ type: 'password' })`
    width: 100%;
    height: 2rem;
    padding: 5px 10px;
    // margin-top: 5%;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    &:focus{
        outline: none;
    }
    `
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-bottom: 5%;
`
export const Label = styled.label`
    font-size: 1.2rem;
    margin-left: .5rem;
`

export const PEditName = styled.p`
    font-size: 2rem;
    margin-bottom: 2rem;
`
export const EditWrapper = styled.div`
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

export const Button = styled.button`
    width: 40%;
    height: 1.5rem;
    padding: 5px 10px;
    margin-top: 10%;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    background-color: ${colors.latte};
`