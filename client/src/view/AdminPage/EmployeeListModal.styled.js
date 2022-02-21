import styled from "styled-components";


export const EmpListWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    left:0;
    background: rgba(255,255,255,0.9);
    // border: 1px solid black;

`
export const EmpListModalContainer = styled.div`
    width: 80rem;
    height: 30rem;
    border: 1px solid gray;
    border-radius: 5px;
    position: absolute;
    background: white;
    display: flex;
    // justify-content: center;
    // align-items: center;
    flex-direction: column;
`
export const EmpListCloseBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    padding: .5rem 1.5rem;
    border-radius: 5px;
    border: 1px solid gray;
    right: 0;
    margin-right: 2rem;
`