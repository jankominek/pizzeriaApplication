
import { BuyButton, IngredientFieldList, Picture, ProductElementContainer, SpanIngeredient, SpanProduct } from './ProductElement.styled'
import {useNavigate} from 'react-router';
export const ProductElement = (props) => {

    const {name, ingredients, id} = props;
    const navigate = useNavigate();

    const ingredientList = ingredients.map( ing => (
        <SpanIngeredient>{ing}</SpanIngeredient>
    ))

    const navigateToProduct = () => {
        navigate(`/pizzeria/dish/${id}`)
    }
    
    return(
        <>
            <ProductElementContainer>
                <Picture src={require(`../../assets/${name}.jpg`).default}/>
                <SpanProduct>{name}</SpanProduct>
                <IngredientFieldList>
                    {ingredientList}
                </IngredientFieldList>
                <BuyButton onClick={navigateToProduct}>Kup teraz..</BuyButton>
            </ProductElementContainer>
        </>
    )
}