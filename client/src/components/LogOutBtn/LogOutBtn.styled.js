import styled from "styled-components";

export const LogoutBtnContainer = styled.div`
    padding: .5rem 1rem;
    border: 1px solid black;
    position: absolute;
    top: 1rem;
    border-radius: 5px;
    right: 0;
    margin-right: ${props => props.marginLeft + "rem" };
`