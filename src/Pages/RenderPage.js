import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './RenderPage.css';
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";
import NoPage from "./NoPage";
import Login from "../EMR/Login/Login";

function RenderPage() {
    const navigate = useNavigate();
    const onClickMenu = () => {
        alert("Đăng nhập thành công ");
        navigate('/');
    };
    return (
        <>

            <div classNameName="App">


                <   link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <div class="topnav" id="myTopnav">


                    <a><Link to="/">Home</Link></a>
                    <a> <Link to="/blogs">Blogs</Link></a>
                    <a> <Link to="/contact">Contact Us</Link></a>
                    <a ><Link to="/nopage">NoPage</Link></a>
                    <a ><Link to="/login">Login</Link></a>

                </div>


                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/blogs' element={< Blogs />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                    <Route exact path='/nopage' element={< NoPage />}></Route>
                    <Route exact path='/login' element={< Login />}></Route>
                </Routes>
            </div >

            <Outlet />

        </>

    );
}

export default RenderPage;
