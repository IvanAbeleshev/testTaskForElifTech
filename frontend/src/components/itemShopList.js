import React from "react";
import { setCurrentShop, setDefaultPageProduct } from "../redux/actions/navigationActions";
import styles from "./itemShopList.module.css";
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

function ItemShopList({id, name}){
    const dispatch = useDispatch();    
    const handleOnclickShop = (event) =>{
        dispatch(setCurrentShop(Number(event.target.getAttribute('shopid'))));
        dispatch(setDefaultPageProduct());
    }
    const currentIdShop = useSelector(state=>state.navigation.currentShop);

    return(
        <li onClick={handleOnclickShop} className={cx(styles.listGroupItem, id===currentIdShop? styles.listGroupItemActive: '')} shopid={id}>{name}</li>
    );
}

export default ItemShopList