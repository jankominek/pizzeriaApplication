import React from "react";
import { Flex } from "../../components/generalStyledComponents/generalStyledComponents";
import { StartPageContainer, SigningContainer } from "./StartPage.styled";
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
export const StartPage = () => {
    return(
        <>
            <StartPageContainer>
                <SigningContainer>
                    <Flex>
                        <label>asd</label>
                        <Input />
                    </Flex>
                    <Flex>
                        <label>asd</label>
                        <Input />
                    </Flex>
                    <Button name="submit"/> 
                </SigningContainer>
            </StartPageContainer>
        </>
    )
}