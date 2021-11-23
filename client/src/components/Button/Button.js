import React from "react";
import {ButtonContainer} from './Button.styled';

export const Button = (props) => {

    const {name} = props;
    return(
        <>
            <ButtonContainer>
                    <span>{name}</span>
            </ButtonContainer>
        </>
    )
}