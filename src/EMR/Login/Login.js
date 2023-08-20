import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";


import * as ServerApi from "../../ServerAPI/ServerApi";

const Login = () => {

    const [doituongs, setDoituongs] = useState([]);

    useEffect(() => {
        ServerApi.get('/danhmuc/getdoituong')
            .then(function (response) {
                // handle success
                setDoituongs(response);
                //console.log(response);
                // console.log(response.data); // Make sure the data you need is in response.data
                //  setDoituongs(response.data); // Update the component state with the fetched data
            })
            .catch(function (error) {
                // handle error
                // console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);
    //  console.log(doituongs);

    return (
        <>
            <header>
                <h1 className="id">Doituong:</h1>
                <ul>
                    {
                        doituongs.map((doituong) => {
                            return (
                                <div>
                                    <table className="table">
                                        <tr>
                                            <td> {doituong.madoituong}</td>
                                            <td>{doituong.doituong}</td>
                                        </tr>

                                    </table>
                                </div>

                            )
                        }

                        )
                    }
                </ul>
            </header>
        </>
    )
}
export default Login