import React from "react";
import ShopCart from "../pages/shopCart";
import ShopPage from "../pages/shopPage";

export const tablePathPages = [
    {
        path: '/',
        title: 'Shop',
        element: <ShopPage />
    },
    {
        path: '/shopCart',
        title: 'Shop Cart',
        element: <ShopCart />
    },
]