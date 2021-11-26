import styled from "styled-components";
import { colors } from "../../utils/theme";

export const ProductListContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    border-top: 2px solid ${colors.lightRed};
    border-radius: 10px;    
    display: flex;
    flex-wrap: wrap; 
`