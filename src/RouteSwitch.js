import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Categories from "./pages/Categories";

const RouteSwitch = () => {

    return(
        <div>
            <NavBar />
            <Categories />
            <BrowserRouter>
                <Routes>
                    <Route path="/thebarcart" element={<Home />}>
                        <Route path="finddrink" element={<Categories />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default RouteSwitch