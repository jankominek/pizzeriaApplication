import { useEffect, useState } from "react";
import { ErrorContainer, ErrorMessage } from "./ErrorComponent.styled"

export const ErrorComponent = (props) => {
    const {message} = props;

    const [visible, setVisible] = useState();

    useEffect(()=>{
        setVisible(true);
        setTimeout(()=>{
            setVisible(false)
        }, 3000)
    },[])

    return(
        <>
        {visible &&
            <ErrorContainer>
                <ErrorMessage>
                    {message}
                </ErrorMessage>
            </ErrorContainer>}
        </>
    )
}