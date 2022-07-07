import { ADD_PRODUCT_TO_BASKET, COMPUTE_TOTAL_PRICE, INIT_DEFAULT_BASKET, SET_COUNT_PRODUCT_BY_ID } from "../types"

export const addProductToBasket = (objectBasket) =>{
    return(
        {
            type: ADD_PRODUCT_TO_BASKET,
            payload: objectBasket
        }
    )
}

export const initDefaultBasket = () =>{
    return(
        {
            type: INIT_DEFAULT_BASKET
        }
    )
}

export const setCountProductById = (newCount) =>{
    return(
        {
            type: SET_COUNT_PRODUCT_BY_ID,
            payload: newCount
        }
    )
}

export const computeTotalPrice = () =>{
    return(
        {
            type: COMPUTE_TOTAL_PRICE,
        }
    )

}