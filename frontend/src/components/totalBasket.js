import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import styles from "./totalBasket.module.css"
import { urlBackend } from "../const";
import { initDefaultBasket } from "../redux/actions/basketActions";

function TotalBasket(props){
    const[status, setStatus] = useState(false);
    
    const dispatch = useDispatch()
    const basket = useSelector(state=>state.basket.productBasket);
    const handleButton = (event)=>{
        event.preventDefault();
        if(props.name==='' || props.email==='' || props.address==='' || props.phone==='' || basket.length===0){
            alert('some fields is undefined or busket is empty');
            return;
        }
        const sendData = {...props, basket};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendData)
        };

        fetch(urlBackend+'/api/order', requestOptions).then(response => response.json())
        .then(({status}) => setStatus(status));
    };

    useEffect(()=>{
        if(status){
            dispatch(initDefaultBasket());
            alert('order is accepted');
        }
    },[status, dispatch]);

    const totalPrice = useSelector(state=>state.basket.totalPrice);
    return(
        <div className={styles.container}>
            <button className={styles.button} onClick={handleButton}>Submit</button>
            <h1>Total Price:{totalPrice} грн.</h1>
        </div>
    )
}

export default TotalBasket;