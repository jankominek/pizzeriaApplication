export const lastOrderReducer = (state = {},  {type, payload}) => {
    switch(type){
        case 'SET_LASTORDER':
            return {
                order : payload
            }
        default :
            return state;    
    }
}