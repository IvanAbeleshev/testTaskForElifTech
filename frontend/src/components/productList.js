import React, { useEffect, useState } from "react";
import { countProductsOnPage, urlBackend } from "../const";
import ItemProductList from "./itemProductList";
import styles from "./productList.module.css";
import {useSelector, useDispatch} from 'react-redux';
import { setCountProductsInShop } from "../redux/actions/navigationActions";
import BottomNavBar from "./bottomNavBar";

function ProductList(){
    const [dataProduct, setDataProduct] = useState([]);
    const [countProducts, setCountProducts] = useState(countProductsOnPage);

    const shopId = useSelector(state=>state.navigation.currentShop);
    const currentPage = useSelector(state=>state.navigation.currentPage);
    
    const dispatch = useDispatch();
    dispatch(setCountProductsInShop(countProducts));

    useEffect(()=>{
        fetch(urlBackend+'/api/product?limit=9&page=1').then(response => response.json()).then(({count, rows}) => {
            setDataProduct(rows)});
    },[]);

        useEffect(()=>{
            const extendCondition = shopId===undefined? '': `&shopId=${shopId}`;
            fetch(urlBackend+`/api/product?limit=${countProductsOnPage}&page=${currentPage}${extendCondition}`).then(response => response.json()).then(({count, rows}) => {
                setCountProducts(count);
                setDataProduct(rows)});    
        }, [shopId, currentPage]);


    return(
        <>
        <div className={styles.gridContainer}>
            {dataProduct.map(element => <ItemProductList key={element.id} {...element}/>)}
        </div>
        <BottomNavBar />
        </>
    );
}

export default ProductList;