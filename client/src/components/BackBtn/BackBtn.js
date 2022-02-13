import { Btn } from "./BackBtn.styled"
import {useNavigate} from 'react-router';

export const BackBtn = () => {

    const navigate = useNavigate();

    return(
        <Btn onClick={() => navigate('/pizzeria')}> 
            Powrót
        </Btn>
    )
}