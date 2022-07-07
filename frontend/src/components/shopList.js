import React, { useEffect, useState } from "react";
import { urlBackend } from "../const";
import ItemShopList from "./itemShopList";
import styles from "./shopList.module.css";

function ShopList(){
    const [shopList, setShopList] = useState([]);
    useEffect(()=>{
        fetch(urlBackend+'/api/shop').then(response => response.json()).then(json => setShopList(json));
    },[]);

    return (
        <ul className={styles.listGroup}>
            {shopList.map(element=><ItemShopList key={element.id} {...element} />)}
        </ul>
    )
}

export default ShopList;