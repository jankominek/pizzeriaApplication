import styled from "styled-components";

export const ModalWrapper = styled.div`
    width: 40rem;
    min-height: 40rem;
    overflowY: scroll;
    margin-left: 40rem;
    position: relative;
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`
export const IngredientField = styled.div`
    width: 80%;
    height: 4rem;
    display: flex;
`

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
margin-left: 1rem;
`
export const IngredientName = styled.span`
    font-size: 2rem;
    margin-left: 1rem;
`