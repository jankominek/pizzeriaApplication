import { LogoutBtnContainer } from "./LogOutBtn.styled"
import {useNavigate} from 'react-router';


export const LogOutBtn = (props) => {

    const navigate = useNavigate();

    return(
        <>
            <LogoutBtnContainer marginLeft={props.marginLeft} onClick={() => navigate("/login")}>
                Wyloguj
            </LogoutBtnContainer>
        </>
    )
}