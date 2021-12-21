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
        default :
            return state;    
    }
}