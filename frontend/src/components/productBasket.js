import React from "react";
import ItemBusket from "./itemBasket";
import {useSelector} from "react-redux";
import styles from "./productBasket.module.css"

function ProductBasket(){
    const addedProducts = useSelector(state => state.basket.productBasket);
    return(
        <div className={styles.container}>
            {addedProducts.map(element=><ItemBusket key={element.id} {...element}/>)}
        </div>
    );
}

export default ProductBasket;