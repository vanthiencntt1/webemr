import { useState } from "react";
import * as ServerApi from "../../ServerAPI/ServerApi";
import './HosoBenan.css';


const HosoBenan = () => {

    const [years, setYear] = useState([]);
    const [mabn, setMabenhnhan] = useState([]);
    const [listEncounters, setListEncounter] = useState([]);
    const [informationTreatments, setInformationTreatment] = useState([]);

    const informationTreatmentsArray = Array.isArray(informationTreatments) ? informationTreatments : [informationTreatments];




    async function API(mabn, years) {
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
                yearTreatment: years
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
    const onClickNam = (years) => {

        API(mabn, years);
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

    //http://localhost:8083/EmrViewMedicalRecord/GetInformationTreatment?encounterCode=2302130950486615352&treatmentDate=02/02/2023 07:52
    const handleInformationTreatment = (encounterCode, treatmentDate) => {

        ServerApi.GetInformationTreatment('', {
            params: {
                encounterCode: encounterCode,
                treatmentDate: treatmentDate

            }
        }).then(function (response) {
            // handle success
            setInformationTreatment(response)

        })
            .catch(function (error) {
                // handle error
                console.log("Error:", error);
            });
    }
    return (
        <>
            <input type="text" onChange={onChangeMabn} />
            <input type="submit" onClick={Getnam} />
            <h2>LIST YEAR</h2>
            <div>
                {years.map((year, index) => (
                    <button type="submit" onClick={() => onClickNam(year.yyyy)} key={index}>{year.yyyy} </button>


                ))}
            </div>
            <h2>LIST Hồ Sơ Bệnh Án</h2>
            <table className="table">

                <ul> <tr>
                    <td>THỜI GIAN</td>

                    <td> PHÒNG KHÁM</td>

                    <td>CHẨN ĐOÁN</td>

                    <td>BÁC SĨ</td>
                    <td>CHI TIẾT</td>
                </tr>
                    {listEncounters.map((listEncounter, index) => (

                        <tr>
                            <td> {listEncounter.createDate}</td>

                            <td> {listEncounter.roomName}</td>

                            <td>{listEncounter.icdName}</td>

                            <td>{listEncounter.doctorName}</td>
                            <button onClick={() => handleInformationTreatment(listEncounter.encounterCode, listEncounter.createDate)}>Chi Tiết</button>
                        </tr>


                    ))}
                </ul >
            </table >

            <h2>LIST thông tin chi tiết lần điều trị</h2>
            <table className="table">
                <ul>
                    <tr>
                        <td>THỜI GIAN</td>
                        <td>PHÒNG KHÁM</td>
                        <td> BÁC SĨ</td>
                        <td>CHẨN ĐOÁN</td>
                        <td>CHUẨN ĐOÁN KÈM THEO</td>
                    </tr>
                    {informationTreatmentsArray.map((informationTreatment, index) => (
                        <tr>
                            <td> {informationTreatment.hospitalDischargeDate}</td>

                            <td> {informationTreatment.roomName}</td>
                            <td> {informationTreatment.doctorName}</td>
                            <td> {informationTreatment.icdName}</td>
                            <td> {informationTreatment.icdNameAttach}</td>



                        </tr>


                    ))}
                </ul >
            </table >



        </>
    )
};

export default HosoBenan;