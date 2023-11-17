import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginRoute from "./LoginRoute";
import MainRoute from "./MainRoute";
import ErrorRoute from "./ErrorRoute";

function HomeRoute() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/ReactJS' element={<LoginRoute/>} />
            <Route path='/Main' element={<MainRoute/>} />
            <Route path='/Error' element={<ErrorRoute/>} />
        </Routes>
        </BrowserRouter>
    ) 
}

export default HomeRoute



