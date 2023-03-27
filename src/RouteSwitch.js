import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar"
import Footer from "./components/Footer"
import FindDrink from "./pages/FindDrink";
import Cart from './pages/Cart'
import Home from "./pages/Home";
import './stylesheets/App.css';

const RouteSwitch = () => {

    return(
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/finddrink" element={<FindDrink />}> 
                        <Route path=":drinkCategory" element={<FindDrink />}></Route>
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
    );
};

export default RouteSwitch