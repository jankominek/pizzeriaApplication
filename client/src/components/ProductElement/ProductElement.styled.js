import styled from "styled-components";
import { colors } from "../../utils/theme";

export const ProductElementContainer = styled.div`
    width: 15rem;
    height: auto;
    box-sizing: border-box;
    padding: 5px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0.05rem solid ${colors.lightRed};
    margin: 1.2rem;
`

export const Picture = styled.img`
    width: 90%;
    margin-bottom: 1rem;
`
export const Price = styled.p`
    font-size: 1.2rem;
    padding: .5rem 0;
    color: green;
`
export const SpanProduct = styled.span`
    font-size: 1.4rem;
`

export const SpanIngeredient = styled.span`
    font-size: 1rem;
`
export const IngredientFieldList = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const BuyButton = styled.div`
    width: 40%;
    height: 2rem;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`