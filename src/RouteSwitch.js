import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Categories from "./pages/Categories";
import Cart from './pages/Cart'

const RouteSwitch = () => {

    return(
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/finddrink" element={<Categories />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default RouteSwitch