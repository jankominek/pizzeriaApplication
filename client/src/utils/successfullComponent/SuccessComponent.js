import { useEffect, useState } from "react";
import { SuccessContainer, SuccessMessage } from "./SuccessComponent.styled"

export const SuccessComponent = (props) => {
    const {message} = props;

    const [visible, setVisible] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setVisible(false)
        }, 3000)
    },[])

    return(
        <>
        {visible &&
            <SuccessContainer>
                <SuccessMessage>
                    {message}
                </SuccessMessage>
            </SuccessContainer>
}
        </>
    )
}