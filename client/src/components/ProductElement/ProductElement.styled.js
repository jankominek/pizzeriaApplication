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

export const Picture = styled.div`
    width: 90%;
    height: 2rem;
    border: 1px solid red;
    margin-bottom: 1rem;
`
export const SpanProduct = styled.span`
    font-size: 1.4rem;
`

export const SpanIngeredient = styled.span`
    font-size: 1rem;
`