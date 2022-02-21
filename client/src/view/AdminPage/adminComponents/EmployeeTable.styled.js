import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const TableWrapper = styled.div`
    width: 100%;
    max-height: 90%;
    // border: 2px solid #D0D0D0;
    display: flex;
    // justify-content: center;
    border-radius: 5px; 
    // align-items: center;
    overflow-y: scroll;
`
export const RowTable = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 2.5px;
    // margin: .5rem 0;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;   
`
export const ColumnWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    // border-bottom: 1px solid black;
`
export const ColumnRow = styled.div`
    display: flex;
    justify-content: center;
    width: ${props => props.widthField || "10rem"};
    align-items: center;      
    height: 3rem;
    font-size: 1.2rem;
    // border: 1px solid black;
`

export const Row = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    margin: .2rem 0;
    background: ${props => props.isOdd? "white" : "#D0D0D0"};
    border-radius: 20px;
    position: relative;
`
export const RowField = styled.div`
    width: ${props => props.widthField || "10rem"};
    display: flex;
    height: 3rem;
    justify-content: center;
    align-items: center;   
`
export const RowFlexCol = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Layer = styled.div`
    width: calc(100% - 9rem);
    height: 100%;
    background: transparent;
    position: absolute;
    index: 0;
`

export const RowButton = styled.div`
    width: ${props => props.widthField || "10rem"};
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;  
    border: 2px solid #787878;
    border-radius: 20px;
    cursor: pointer;
    index: 100;
`

export const DishInfoWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #585858;
    border-radius: 20px;
    color: white;
    text-transform: uppercase;
    font-size: .8rem;
`

export const BorderRight = styled.div`
    position: absolute;
    border: 1px solid white;
    width: .1rem;
    height: 50%;
    margin-top: 12.5%;
    right: 0;
    top: 0;
`
export const DishInfoField = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
`

export const DishInfoName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 0rem 2rem;
    position: relative;
`
export const DishInfoIngredientsContainer = styled.div`
    display: flex;
    margin-left: .5rem;
`
export const IngredientField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 0 1rem;
`