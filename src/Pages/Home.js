import { useState } from "react";
import * as ServerApi from "../ServerAPI/ServerApi";
import './Home.css';


const Home = () => {

    const [years, setYear] = useState([]);
    const [mabn, setMabenhnhan] = useState([]);
    const [listEncounters, setListEncounter] = useState([]);


    async function API(mabn) {
        ServerApi.getDoiTuong()
            .then(function (response) {
                // handle success

            })
            .catch(function (error) {
                // handle error
                console.log("Error:", error);
            });
        ServerApi.getYear('', {
            params: {
                patientCode: mabn
            }
        })
            .then(function (response) {
                // handle success

                setYear(response)
            })
            .catch(function (error) {
                // handle error
                console.log("Error:", error);
            });


        ServerApi.getGetListEncounter('', {
            params: {
                patientCode: mabn,
                yearTreatment: 2023
            }
        })
            .then(function (response) {
                // handle success

                setListEncounter(response)
            })
            .catch(function (error) {
                // handle error
                console.log("Error:", error);
            });
        console.log(listEncounters)

    }
    const onClickNam = (event) => {
        API(mabn);
    }
    const onChangeMabn = (event) => {
        setMabenhnhan(event.target.value)
    }
    const Getnam = () => {
        API(mabn)
        //[{"key":"patientCode","value":"22072888","equals":true}]
        // return (<>
        //     <div>

        //         {years.map((year, index) => (
        //             <input type="submit" onClick={Getnam} key={index}>{year.yyyy}</input>

        //         ))}
        //     </div>


        // </>)
    }
    return (
        <>
            <input type="text" onChange={onChangeMabn} />
            <input type="submit" onClick={Getnam} />
            <h2>LIST YEAR</h2>
            <div>
                {years.map((year, index) => (
                    <button type="submit" onClick={onClickNam} key={index}>{year.yyyy}</button>

                ))}
            </div>
            <h2>LIST Hồ Sơ Bệnh Án</h2>
            <table className="table">
                <ul>
                    {listEncounters.map((listEncounter, index) => (
                        <tr>
                            <td> {listEncounter.createDate}</td>

                            <td> {listEncounter.roomName}</td>

                            <td>{listEncounter.icdName}</td>

                            <td>{listEncounter.doctorName}</td>
                        </tr>


                    ))}
                </ul >
            </table >




        </>
    )
};

export default Home;