import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/Main';
import Login from '../pages/Login'

const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route element = {<Main />} path = "/" />
            <Route element = {<Login />} path = "/Login" />
        </Routes>
        </BrowserRouter>
    )
}
export default Router;