import React from "react";
import NavBar from "../components/navBar";
import ProductList from "../components/productList";
import ShopList from "../components/shopList";
import styles from "./shopPage.module.css";

function ShopPage(){

    return (
        <NavBar>
            <div className={styles.shopNavigator}>
                <h2>Shops</h2>
                <ShopList />
            </div>

            <div className={styles.dataShop}>
                <ProductList />
            </div>
        </NavBar>
        
    );
}

export default ShopPage;