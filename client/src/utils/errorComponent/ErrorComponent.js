import { useEffect, useState } from "react";
import { ErrorContainer, ErrorMessage } from "./ErrorComponent.styled"

export const ErrorComponent = (props) => {
    const {message} = props;

    useEffect(()=>{
        setTimeout(()=>{
            props.closeSuccErrorComponent();
        }, 3000)
    },[])

    return(
        <>
            <ErrorContainer>
                <ErrorMessage>
                    {message}
                </ErrorMessage>
            </ErrorContainer>
        </>
    )
}