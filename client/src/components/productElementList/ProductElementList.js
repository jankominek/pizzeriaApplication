import { ProductElement } from "../ProductElement/ProductElement"
import { ProductListContainer } from "./ProductElementList.styled"
import { type_of_products } from "../../utils/type_of_products"
import { ProductField } from "../ProductField/ProductField"


export const ProductElementList = (props) => {

    const {products} = props;
    console.log(products)

    const product_list = products.map((product)=> (
        <ProductElement name={product.dishName} ingredients={product.ingredients}/>
    ));

    return(
        <ProductListContainer>
            {product_list}
        </ProductListContainer>

    )
}