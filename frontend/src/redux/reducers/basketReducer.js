import { ADD_PRODUCT_TO_BASKET, COMPUTE_TOTAL_PRICE, INIT_DEFAULT_BASKET, SET_COUNT_PRODUCT_BY_ID } from "../types";

const initialState = {
    productBasket: [],
    totalPrice: 0,
}

export const basketReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_PRODUCT_TO_BASKET:
            return {...state, productBasket: addProductToState(state.productBasket, action.payload)}
        case SET_COUNT_PRODUCT_BY_ID:
            return {...state, productBasket: setNewCount(state.productBasket, action.payload)}
        case INIT_DEFAULT_BASKET:
            return {...state, productBasket:[], totalPrice: 0}
        case COMPUTE_TOTAL_PRICE:
            return{...state, totalPrice: computeTotalPrice(state.productBasket)}
        default: 
            return state;
    }
}


//------------------------------------------------
const addProductToState = (prevArray, newEntry) =>{

    let isFind = false;
    prevArray.forEach(element => {
        if(element.id === newEntry.id){
            element.count += newEntry.count;
            isFind = true;
        }
    });
    
    if(!isFind){
        return [...prevArray, newEntry];
    }
    
    return prevArray;
}

const setNewCount = (prevArray, newCount) =>{

 
    prevArray.forEach(element => {
        if(element.id === newCount.id){
            element.count = newCount.count;
        }
    });
    
    return prevArray;
}

const computeTotalPrice = (dataInput) =>{
    let sum = 0;
    dataInput.forEach(element=>sum += (element.count * element.price))

    return sum;
}