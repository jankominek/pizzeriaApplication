import { useEffect, useState } from "react";
import { SuccessContainer, SuccessMessage } from "./SuccessComponent.styled"

export const SuccessComponent = (props) => {
    const {message} = props;

    useEffect(()=>{
        setTimeout(()=>{
            props.closeSuccErrorComponent();
        }, 2000)
    },[])

    return(
        <>
            <SuccessContainer>
                <SuccessMessage>
                    {message}
                </SuccessMessage>
            </SuccessContainer>
        </>
    )
}