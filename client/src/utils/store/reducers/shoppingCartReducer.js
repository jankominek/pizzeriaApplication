const initialState = {
    products : []
}

export const shoppingCartReducer = (state = initialState,  {type, payload}) => {
    switch(type){
        case 'SET_SHOPPINGCART':
            return {
                ...state,
                products : [...state.products, payload]
            }
        case 'DELETE_FROM_SHOPPINGCART':
            return {
                ...state,
                products : state.products.filter( object => object.dish_name !== payload)
            }
        default :
            return state;    
    }
}