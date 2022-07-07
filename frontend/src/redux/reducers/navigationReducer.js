import { countProductsOnPage } from "../../const";
import { SET_COUNT_PRODUCTS_IN_SHOP, SET_CURRENT_SHOP, SET_DEFAULT_PAGE_PRODUCT, SET_PAGE_PRODUCT } from "../types";

const initialState = {
    currentShop: undefined,
    currentPage: 1,
    countProductsInShop: countProductsOnPage,
}

export const navigationReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_CURRENT_SHOP:
            return {...state, currentShop: action.payload};
        case SET_DEFAULT_PAGE_PRODUCT:
            return {...state, currentPage: 1};
        case SET_PAGE_PRODUCT:
            return {...state, currentPage: action.payload};
        case SET_COUNT_PRODUCTS_IN_SHOP:
            return {...state, countProductsInShop: action.payload}
        default: return state;
    }
}