import React from "react";
import { tablePathPages } from "../routes/tableRoutes";
import styles from "./navBar.module.css";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

function NavBar({children}){

    const TotalPrice = useSelector(state=>state.basket.totalPrice);
    const currentPath = useLocation();
    return(
        <>
            <nav className={styles.container}>
                <div>Delivery shop</div>
                <ul className={styles.navList}>
                    {tablePathPages.map(element=>
                    <li className={styles.itemNav} key={element.path}>
                        <NavLink className={currentPath.pathname===element.path?styles.activeLink:''} to={element.path}>
                            {(currentPath.pathname!=="/shopCart"&&element.path==="/shopCart")?`${element.title}(${TotalPrice} грн)`:element.title}
                        </NavLink>
                    </li>)
                    }
                </ul>
            </nav>
            <div className={styles.dataPages}>{children}</div>
        </>

    );

}

export default NavBar;