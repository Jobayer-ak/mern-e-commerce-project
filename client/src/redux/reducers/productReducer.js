import * as actionType from "../constants/productConstants";

export const getProductsReducer = (state = {products: []}, action) =>{ // here is action means update
    switch (action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return {
                products: action.payload
            }

        case actionType.GET_PRODUCTS_FAIL:
            return {
                error: action.payload
            }

        default:
            return state;
    }
}