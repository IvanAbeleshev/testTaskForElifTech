import React, { useState } from "react";
import NavBar from "../components/navBar";
import ProductBasket from "../components/productBasket";
import TotalBasket from "../components/totalBasket";
import styles from "./shopCart.module.css";

function ShopCart(){
    const[valuesInput, setValuesInput] = useState({phone:'', address: '', email:'', name:''});

    return(
        <NavBar>
            <form className={styles.form}>
                <div className={styles.dataForm}>
                    <div className={styles.leftPart}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="name">Name</label>
                            <input id="name" type={'text'} placeholder='Name'  value={valuesInput.name} onChange={event=>setValuesInput({...valuesInput, name: event.target.value})} />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="email">email</label>
                            <input id="email" type={'email'} placeholder='example@gmail.com'  value={valuesInput.email} onChange={event=>setValuesInput({...valuesInput, email: event.target.value})} />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" type={'tel'} placeholder='phone' value={valuesInput.phone} onChange={event=>setValuesInput({...valuesInput, phone: event.target.value})} />
                        </div>
                        
                        <div className={styles.inputContainer}>
                            <label htmlFor="address">address</label>
                            <input id="address" type={'text'} placeholder='address' value={valuesInput.address} onChange={event=>setValuesInput({...valuesInput, address: event.target.value})} />
                        </div>
                    </div>
                    <div className={styles.rightPart}>
                        <ProductBasket />
                    </div>
                </div>
                <TotalBasket {...valuesInput}/>
            </form>
        </NavBar>
    )
}

export default ShopCart;