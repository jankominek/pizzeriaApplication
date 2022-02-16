import styled from 'styled-components'; 
import {colors} from '../../utils/theme'
export const LoginContainer = styled.div`
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
    width: 80%;
    height: 1.5rem;
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

export const Button = styled.button`
    width: 40%;
    height: 1.5rem;
    cursor: pointer;
    padding: 5px 10px;
    margin-top: 10%;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    background-color: ${colors.lightRed};
`
export const PError = styled.p`
    margin-top: 1rem;
    color: red;
    font-size: 1.2rem;
`
export const ButtonRegister = styled.button`
    width: 20%;
    height: 1.5rem;
    padding: 5px 10px;
    margin-top: 5%;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    background-color: ${colors.lightRed};
`