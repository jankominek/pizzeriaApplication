import styled from "styled-components";

export const VerificationModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background rgba(255,255,255,.95);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
`

export const TitleModal = styled.p`
    font-size: 2.5rem;
    margin: .5rem 0;
`
export const VerificationModalField = styled.div`
    width: 35rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const VerificationInput = styled.input`
    outline: none;
    margin-top: 2rem;
    border: 1px solid black;
    border-radius: 5px;
    padding: .8rem 2rem;
    background: none;
    font-size: 1.2rem;
`

export const VerificationButton = styled.div`
    cursor: pointer;
    margin-top: 2rem;
    width: 5rem;
    height: 2rem;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    background: none;
    padding: 1rem 3rem;
    justify-content: center;
    align-items: center;
`
export const ErrorMessage = styled.p`
    font-size: 2rem;
    color: red;
    margin-top: 1rem;
`