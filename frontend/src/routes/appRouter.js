import React from "react";
import {Routes, Route} from "react-router-dom";
import { tablePathPages } from "./tableRoutes";

function AppRouter(){
    return(
    <Routes>
        {tablePathPages.map(({path, element})=><Route key={path} path={path} element={element} />)}
    </Routes>)
}

export default AppRouter;