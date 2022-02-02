import styled from "styled-components";

export const PasswordModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
    position: absolute;
    opacity: 1;
`
export const PasswordModalContainer = styled.div`
    width: 30rem;
    height: 15rem;
    position absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    background: #DCDCDC;
`
export const Flex = styled.div`
    display: flex;
`

export const PasswordInput = styled.input`
    width: 60%;
    height: 2rem;
    padding: .5rem .5rem;
    margin: 1rem 1rem;
    border: none;
    border-radius: 5px;
    background: #E8E8E8;
    color: black;
    &:focus {
        outline: none;
    }
`

export const Button = styled.div`
    padding: .5rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 1rem;
    border: 1px solid gray;
    border-radius: 5px;
    background: #E8E8E8;
`