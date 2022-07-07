import React from "react";
import { countProductsOnPage } from "../const";
import {useSelector, useDispatch} from "react-redux";
import { setPageProduct } from "../redux/actions/navigationActions";
import styles from "./bottomNavBar.module.css";


function BottomNavBar(){

    const currentPage = useSelector(state=>state.navigation.currentPage);
    const countProductsInShop = useSelector(state=>state.navigation.countProductsInShop);
    const dispatch = useDispatch();

    const pages = [];
    
    for(let i=1; i<=Math.ceil(countProductsInShop/countProductsOnPage); i++){
        pages.push(i);
    }

    if(pages.length===1){
        return <></>;
    }

    const handleButton = (event) =>{
        dispatch(setPageProduct(Number(event.target.innerHTML)));
    }

    return(
        <div className={styles.buttonContainer}>
        {pages.map(element=><button className={element===currentPage?styles.activeButton:styles.itemButton} onClick={handleButton} key={element}>{element}</button>)}
        </div>
    );
}

export default BottomNavBar;