import { MenuElementContainer } from "./MenuElement.styled"

export const MenuElement = (props) => {

    return(
        <MenuElementContainer>
            {props.title}
        </MenuElementContainer>
    )
}