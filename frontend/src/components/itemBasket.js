import React, { useEffect, useState } from "react";
import { urlBackend } from "../const";
import {useDispatch} from "react-redux";
import { computeTotalPrice, setCountProductById } from "../redux/actions/basketActions";
import styles from "./itemBasket.module.css";

function ItemBusket({id, count}){
    const[productData, setProductData] = useState();
    const[currentCount, setCurrentCount] = useState(count);

    const dispatch = useDispatch();

    useEffect(()=>{
        fetch(urlBackend+`/api/product/findOne?id=${id}`).then(response => response.json()).then(json => setProductData(json));
    },[id]);

    useEffect(()=>{
        dispatch(setCountProductById({id, count: currentCount}))
        dispatch(computeTotalPrice());
    },[currentCount, id, dispatch]);

    if(!productData){
        return <></>
    };

    const handleChangeInput = (event) =>{
        setCurrentCount(Number(event.target.value));
    }

    return(
    <div className={styles.container}>
        <div className={styles.leftPart}>
            <img className={styles.imgObject} src={urlBackend+'/'+productData.img} alt={productData.img} />
        </div>
        <div className={styles.rightPart}>
            <h3>{productData.name}</h3>
            <h4>{productData.description}</h4>
            <p>{productData.price} грн.</p>
            <input type={'number'} value={currentCount} onChange={handleChangeInput} />
        </div>
    </div>
    );
}

export default ItemBusket;