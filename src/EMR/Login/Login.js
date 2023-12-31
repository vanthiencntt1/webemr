import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ServerApi from "../../ServerAPI/ServerApi";
import "./Login.css";
import Home from "../../Pages/Home";
import RenderPage from "../../Pages/RenderPage";



const Login = () => {

    const navigate = useNavigate();
    const hashpasss = {
        password: ''

    }
    const reders = {
        fullname: ''
    };
    const [doituongs, setDoituongs] = useState([]);
    //   const [hashpass, setHashpass] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [render, setRender] = useState([]);
    const [checklogin, setChecklogin] = useState(null);
   
    useEffect(() => {
        ServerApi.get('/danhmuc/getdoituong')
            .then(function (response) {
                // handle success
                setDoituongs(response);
            })
            .catch(function (error) {
                // handle error
                console.log("Error:", error);
            });
    }, []);

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onClickMenu = () => {
        navigate('/');

    }
    const onClickLogin = (event) => {


        ServerApi.post('/EmrUseridLogin/hash-password?password=' + password)
            .then(function (response) {

                //   setHashpass(response); // Set the hashed password in the state
                hashpasss.password = response.data;


                ServerApi.post('/EmrUseridLogin/GetEmrUseridLogin', {
                    "userid": username,
                    "password": hashpasss.password
                }
                )
                    .then(function (response) {
                      //  setChecklogin(response.status)
                  
                        // setChecklogin(response.status)
                        // console.log(checklogin)
                        reders.fullname = response.fullname;
                         console.log("Response status:", response.status);
                         if (response && response.status === 200) {
                            // alert("Đăng nhập thành công")
                           // onClickMenu();
                            const root = ReactDOM.createRoot(document.getElementById('root'));
                            root.render(
                              <React.StrictMode>
                                <BrowserRouter>

                                  <RenderPage />
                                </BrowserRouter>
                              </React.StrictMode>
                            );
                        }
                    })
                    .catch(function (error) {
                        // handle error
                        console.log("Error:", error);
                        alert("Vui long nhập đúng tài khoản và mật khẩu")
                    });
                return reders.fullname;


            })
            .catch(function (error) {
                // handle error
                console.log("Error:", error);
            });


    };

    // useEffect(() => {
    //     console.log("Response", reders.fullname);
    //     setRender(reders.fullname);
    //     console.log(render)
    // }, []);

    return (
        <>
            {/* <Routes>
                <Route path='/' element={< Home />}></Route>
            </Routes> */}
            {/* <header>
                <h1 className="id">Doituong:</h1>
                <ul>
                    {doituongs.map((doituong) => (
                        <div key={doituong.madoituong}>
                            <table className="table">
                                <tr>
                                    <td>{doituong.madoituong}</td>
                                    <td>{doituong.doituong}</td>
                                </tr>
                            </table>
                        </div>
                    ))}
                </ul>
            </header> */}


            <div class="box-form">
                <div class="left">
                    <div class="overlay">
                        <h1>HỒ SƠ BỆNH ÁN EMR</h1>

                        <span>
                            <p>login with social media</p>
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
                        </span>
                    </div>
                </div>
                <div class="right">

                    <h5>Login</h5>
                    <div class="inputs">
                        <input type="text" onChange={onChangeUsername}
                            value={username} placeholder="user name" />
                        <input type="password" onChange={onChangePassword}
                            value={password} placeholder="password" />
                    </div>
                    <div class="remember-me--forget-password">
                        <label>
                            <input type="checkbox" name="item" checked />
                            <span class="text-checkbox">Lưu Password</span>
                        </label>
                        <p>forget password?</p>
                    </div>
                    <button onClick={onClickLogin}>Đăng Nhập</button>
                </div>
            </div>

            {/* <form>
                <div>Username</div>
                <input
                    type="text"
                    name="username"
                    onChange={onChangeUsername}
                    value={username}
                />
                <div>Password</div>
                <input
                    type="password" // Use type="password" for password input
                    name="password"
                    onChange={onChangePassword}
                    value={password}
                />
                <div>
                    <input
                        type="button" // Use type="button" for the submit button
                        name="submit"
                        value="Submit"
                        onClick={onClick}
                    />
                </div>
            </form> */}
            <>
                {/* <div>
                    <ul>
                        {render.map((rd) => (
                            <div key={rd.fullname}>
                                <table className="table">
                                    <tr>
                                        <td>{rd.fullname}</td>

                                    </tr>
                                </table>
                            </div>
                        ))}
                    </ul>
                </div> */}

            </>
        </>
    );
};

export default Login;
