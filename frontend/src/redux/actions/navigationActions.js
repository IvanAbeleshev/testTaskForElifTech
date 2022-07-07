import { SET_COUNT_PRODUCTS_IN_SHOP, SET_CURRENT_SHOP, SET_DEFAULT_PAGE_PRODUCT, SET_PAGE_PRODUCT } from "../types"

export const setCurrentShop = (shopId) =>{
    return(
        {
            type: SET_CURRENT_SHOP,
            payload: shopId
        }
    )
}

export const setDefaultPageProduct = () =>{
    return(
        {
            type: SET_DEFAULT_PAGE_PRODUCT
        }
    )
}


export const setPageProduct = (page) =>{
    return(
        {
            type: SET_PAGE_PRODUCT,
            payload: page,
        }
    )
}

export const setCountProductsInShop = (count) =>{
    return(
        {
            type: SET_COUNT_PRODUCTS_IN_SHOP,
            payload: count,
        }
    );
}