export const setShoppingCart = (cart) => {
    return  {
        type: 'SET_SHOPPINGCART',
        payload : cart
    }
}

export const deleteFromShoppingCart = (element)=> {
    return {
        type: 'DELETE_FROM_SHOPPINGCART',
        payload : element
    }
}