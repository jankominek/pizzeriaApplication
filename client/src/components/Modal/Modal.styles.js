import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(192,192,192,0.3);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`
export const ModalWrapper = styled.div`
    width: 40rem;
    max-height: 40rem;
    border: 2px solid gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    overflow-y: auto;
    background: white;
    transform: translate(-50%, -50%);
`
export const IngredientField = styled.div`
    padding: 1rem 0rem;
    width: 70%;
    border-radius: 10px;
    border: 1px solid black;
    // margin: 0.25rem 0rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const ProductWithCheckBoxContainer = styled.div`
    
`

export const IngredientCountWrapper = styled.div`
    // width: 5rem;
    // height: 3rem;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FlexWrapper = styled.div`
    display: flex;
`
export const CountField = styled.p`
    font-size: 1.5rem;
    padding: 0 .5rem;
`
export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // background: red;
    font-size: 2rem;
    cursor: pointer;
`
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
margin-left: 1rem;
`
export const IngredientName = styled.span`
    font-size: 1.5rem;
    margin-left: 1rem;
`
export const Price = styled.p`
    font-size: 1.5rem;
    color: green;
    text-align: right;
    margin-right: 2rem;
`
export const CloseButton = styled.div`
    cursor: pointer;
    padding: 1rem 2rem;
    background: red;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-left: .5rem;
    margin-right: .5rem;
    margin-bottom: 1rem;
`
export const AddButton = styled.div`
    cursor: pointer;
    padding: 1rem 2rem;
    background: #9AE66E;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-left: .5rem;
    margin-right: .5rem;
    margin-bottom: 1rem;
`