import styled from "styled-components";
import { colors } from "../../utils/theme";

export const ProductFieldContainer = styled.div`
    width: 18rem;
    height: 2rem;
    display: flex;
    margin-left: 2rem;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: ${colors.lightRed};
`
export const SpanProduct = styled.span`
    font-size: 1.3rem;
`