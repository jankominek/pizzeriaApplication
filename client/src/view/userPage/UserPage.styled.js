import styled from "styled-components";
import { colors } from "../../utils/theme";

export const UserPageContainer = styled.div`
    width: 100%;
    // height: 100%
    display: flex;
    flex-direction: column;
    background: ${colors.latte};
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const CompanyName = styled.span`
    font-size: 5rem;
    margin-top: 30vh;
    margin-bottom: 3rem;
`

export const UserName = styled.span`
    font-size: 3rem;
    margin-bottom: 4rem;
`

export const ProductTypeContainer = styled.div`
    display: flex;
    margin-bottom: 1rem;
`
// export const MainField = styled.div`
//     flex-grow:1;
//     height: 100%;
//     background: lightgray;
//     display: flex;
//     flex-direction: column;
//     // justify-content: center;
//     align-items: center;
// `
// export const Flex = styled.div`
//     display: flex;
// `

export const ShoppingCartIconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;
    translate: transform(-50%, -50%);
    background: gray;
    display: flex;
    justify-content: center;
    border-radius: 25px;
    align-items: center;
    color: white;
`
export const EditUserIconContainer = styled.div`
    width: 8rem;
    height: 3rem;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 6rem;
    translate: transform(-50%, -50%);
    background: #cdb891;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    color: white;
`