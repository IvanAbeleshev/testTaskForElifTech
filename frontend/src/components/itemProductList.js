import React from "react";
import { urlBackend } from "../const";
import styles from "./itemProductList.module.css";
import {useDispatch} from "react-redux";
import { addProductToBasket, computeTotalPrice } from "../redux/actions/basketActions";

function ItemProductList({id, img, name, description, price}){

    const dispatch = useDispatch()
    const handleButton = (event) =>{
        dispatch(addProductToBasket({id: Number(event.target.getAttribute("productid")), count: 1, price }));
        dispatch(computeTotalPrice());
    };

    return(
        <div className={styles.container}>
            <img className={styles.imgContainer} src={urlBackend+'/'+img} alt={img} />
            <h4>{name}</h4>
            <p className={styles.decoration}>{description}</p>
            <div className={styles.bottomPanel}>
                <h4>{price} грн.</h4>
                <button className={styles.button} productid={id} onClick={handleButton}>add to Cart</button>
            </div>
        </div>

    );
}

export default ItemProductList;