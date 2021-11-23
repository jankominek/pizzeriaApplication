import { ProductFieldContainer, SpanProduct } from "./ProductField.styled"


export const ProductField = (props) => {
    return(
        <>
            <ProductFieldContainer>
                <SpanProduct>{props.type}</SpanProduct>
            </ProductFieldContainer>
        </>
    )
}