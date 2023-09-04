import { useState } from "react";
import * as ServerApi from "../../ServerAPI/ServerApi";
import "./HosoBenan.css";
import ChiTietCDHA from "./ChiTietCDHA";
//import ChiTietThuoc from "./ChiTietThuoc";
//import { useEffect } from "react";

const HosoBenan = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const [years, setYear] = useState([]);
  const [mabn, setMabenhnhan] = useState([]);
  const [listEncounters, setListEncounter] = useState([]);
  const [informationTreatments, setInformationTreatment] = useState([]);
  const [getListPrescriptions, setGetListPrescription] = useState([]);
  const [detaitPrescriptions, setDetaitPrescription] = useState([]);

  const informationTreatmentsArray = Array.isArray(informationTreatments)
    ? informationTreatments
    : [informationTreatments];



  const handleInformationTreatment = (encounterCode, treatmentDate) => {
    ServerApi.GetInformationTreatment("", {
      params: {
        encounterCode: encounterCode,
        treatmentDate: treatmentDate,
      },
    })
      .then(function (response) {
        // handle success
        setInformationTreatment(response);
      })
      .catch(function (error) {
        // handle error
        console.log("Error:", error);
      });
  };




  async function API(mabn, years) {
    // ServerApi.getDoiTuong()
    //   .then(function (response) {
    //     // handle success
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log("Error:", error);
    //   });
    ServerApi.getYear("", {
      params: {
        patientCode: mabn,
      },
    })
      .then(function (response) {
        // handle success
        setYear(response);
      })
      .catch(function (error) {
        console.log("Error:", error);
        alert("Vui lòng nhập đúng mã bệnh nhân");
      });

    ServerApi.getGetListEncounter("", {
      params: {
        patientCode: mabn,
        yearTreatment: years,
      },
    })
      .then(function (response) {
        // handle success

        setListEncounter(response);
      })
      .catch(function (error) {
        // handle error
        console.log("Error:", error);
      });
  }
  const onClickNam = (years) => {
    API(mabn, years);
    setSelectedYear(years);
  };
  const onChangeMabn = (event) => {
    setMabenhnhan(event.target.value);
  };
  const Getnam = () => {
    API(mabn);
    //[{"key":"patientCode","value":"22072888" ,23008203,"equals":true}]
    // return (<>
    //     <div>

    //         {years.map((year, index) => (
    //             <input type="submit" onClick={Getnam} key={index}>{year.yyyy}</input>

    //         ))}
    //     </div>

    // </>)
  };

  const ViewGetInformationTreatment = (mabn, selectedYear) => {
    ServerApi.GetListPrescription("", {
      params: {
        patientCode: mabn,
        yearTreatment: selectedYear,
      },
    })
      .then(function (response) {
        // handle success
        setGetListPrescription(response);
      })
      .catch(function (error) {
        // handle error
        console.log("Error:", error);
      });
    return (
      <>
        <h2>LIST Thuốc</h2>
        <table className="table">
          <ul>
            {" "}
            <tr>
              <td>BÁC SĨ</td>
            </tr>
            {getListPrescriptions.map((getListPrescription, index) => (
              <tr>
                <td> {getListPrescription.doctorName}</td>

                <button
                  onClick={() =>
                    ViewDetaitPrescription(
                      decodeURIComponent(getListPrescription.createDate),
                      getListPrescription.id
                    )
                  }
                >
                  Chi Tiết
                </button>
              </tr>
            ))}
          </ul>
        </table>
      </>
    );
  };
  const ViewDetaitPrescription = (createDate, id) => {
    ServerApi.DetaitPrescription("", {
      params: {
        createDate: createDate,
        id: id,
      },
    })
      .then(function (response) {
        // handle success
        setDetaitPrescription(response.detaitMedicines);
      })
      .catch(function (error) {
        // handle error
        console.log("Error:", error);
      });
    return (
      <>
        <h2>LIST Thuốc Chi Tiết</h2>
        <div class="table-wrapper">
          <table class="fl-table">
            <thead>
              <tr>
                <th>SST</th>
                <th>name</th>
                <th>unit</th>
                <th>active</th>
                <th>routeOfUse</th>
                <th>usage</th>
                <th>numberOfDays</th>
                <th>quantity</th>
                <th>note</th>
              </tr>
            </thead>
            <tbody>
              {detaitPrescriptions.map((detaitPrescription, index) => (
                <tr>
                  <td> {detaitPrescription.sortNumber}</td>
                  <td> {detaitPrescription.active}</td>
                  <td> {detaitPrescription.name}</td>
                  <td> {detaitPrescription.unit}</td>
                  <td> {detaitPrescription.routeOfUse}</td>
                  <td> {detaitPrescription.usage}</td>
                  <td> {detaitPrescription.numberOfDays}</td>
                  <td> {detaitPrescription.quantity}</td>
                  <td> {detaitPrescription.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  const viewGetListDiagnosticResult = () => {
   // console.log(mabn, selectedYear);
   // ChiTietCDHA(mabn, selectedYear);
  };

  return (
    <>
      <div>
        <thead className="TRACU">
          <h2>NHẬP MÃ BỆNH NHÂN TRA CỨU</h2>
          <input type="text" onChange={onChangeMabn} />
          <input type="submit" onClick={Getnam} />
          <h2>LIST YEAR</h2>
          <div>
            {years.map((year, index) => (
              <button
                type="submit"
                onClick={() => onClickNam(year.yyyy)}
                key={index}
              >
                {year.yyyy}{" "}
              </button>
            ))}
          </div>
        </thead>
      </div>

      <h2>LIST Hồ Sơ Bệnh Án</h2>
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>THỜI GIAN</th>

              <th> PHÒNG KHÁM</th>

              <th>CHẨN ĐOÁN</th>

              <th>BÁC SĨ</th>
              <th>CHI TIẾT</th>
            </tr>
          </thead>
          <tbody>
            {listEncounters.map((listEncounter, index) => (
              <tr>
                <td> {listEncounter.createDate}</td>

                <td> {listEncounter.roomName}</td>

                <td>{listEncounter.icdName}</td>

                <td>{listEncounter.doctorName}</td>
                <button
                  onClick={() =>
                    handleInformationTreatment(
                      listEncounter.encounterCode,
                      listEncounter.createDate
                    )
                  }
                >
                  Chi Tiết
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>LIST thông tin chi tiết lần điều trị</h2>
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>THỜI GIAN</th>
              <th>PHÒNG KHÁM</th>
              <th> BÁC SĨ</th>
              <th>CHẨN ĐOÁN</th>
              <th>CHUẨN ĐOÁN KÈM THEO</th>
              <th>CHI TIẾT</th>
            </tr>
          </thead>
          <tbody>
            {informationTreatmentsArray.map((informationTreatment, index) => (
              <tr>
                <td> {informationTreatment.hospitalDischargeDate}</td>

                <td> {informationTreatment.roomName}</td>
                <td> {informationTreatment.doctorName}</td>
                <td> {informationTreatment.icdName}</td>
                <td> {informationTreatment.icdNameAttach}</td>
                <button
                  onClick={() =>
                    ViewGetInformationTreatment(mabn, selectedYear)
                  }
                >
                  Chi Tiết Thuốc
                </button>
                <button
                  onClick={() =>
                    viewGetListDiagnosticResult()
                  }
                >
                  Chi Tiết CDHA
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ViewGetInformationTreatment />
      <ViewDetaitPrescription />
      <ChiTietCDHA
      mabn ={mabn}
      selectedYear={selectedYear}
      viewGetListDiagnosticResult={viewGetListDiagnosticResult}
      />
    </>
  );
};

export default HosoBenan;
