import { ProductElement } from "../ProductElement/ProductElement"
import { ProductListContainer } from "./ProductElementList.styled"
import { type_of_products } from "../../utils/type_of_products"
import { ProductField } from "../ProductField/ProductField"


export const ProductElementList = () => {


    return(
        <ProductListContainer>
            <ProductElement />
            <ProductElement />
            <ProductElement />
            <ProductElement />
            <ProductElement />
            <ProductElement />
            <ProductElement />
            <ProductElement />
            <ProductElement />
        </ProductListContainer>

    )
}