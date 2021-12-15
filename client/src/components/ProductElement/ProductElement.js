
import { BuyButton, IngredientFieldList, Picture, ProductElementContainer, SpanIngeredient, SpanProduct } from './ProductElement.styled'
export const ProductElement = (props) => {

    const {name, ingredients} = props;

    const ingredientList = ingredients.map( ing => (
        <SpanIngeredient>{ing}</SpanIngeredient>
    ))

    return(
        <>
            <ProductElementContainer>
                <Picture src={require(`../../assets/${name}.jpg`).default}/>
                <SpanProduct>{name}</SpanProduct>
                <IngredientFieldList>
                    {ingredientList}
                </IngredientFieldList>
                <BuyButton>Kup teraz..</BuyButton>
            </ProductElementContainer>
        </>
    )
}