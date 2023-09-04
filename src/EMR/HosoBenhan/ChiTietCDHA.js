import React, { useEffect, useState } from "react";
import HTMLtoReact from "html-to-react";
import htmlToText from "html-to-text";
import * as ServerApi from "../../ServerAPI/ServerApi";
import "./ChiTietCDHA.css";

const ChiTietCDHA = (props) => {
  const [listDiagnosticResults, setListDiagnosticResult] = useState([]);
  const [detailDiagnosticResults, setDetailDiagnosticResult] = useState([]);
  // const [createDate, setCreateDate] = useState();

  // const [technicalId, setTechnicalId] = useState();
  // const [id, setId] = useState();

  // useEffect(() => {
  ServerApi.GetListDiagnosticResult("", {
    params: {
      patientCode: props.mabn,
      yearTreatment: props.selectedYear,
    },
  })
    .then(function (response) {
      // handle success

      setListDiagnosticResult(response);
    })
    .catch(function (error) {
      // handle error
      console.log("Error:", error);
    });
  // }, []);

  const viewCDHA = (createDate, technicalId, id) => {
    // setCreateDate(createDate);
    // setTechnicalId(technicalId);
    // setId(id);

    ServerApi.GetDetailDiagnosticResult("", {
      params: {
        createDate: createDate,
        technicalId: technicalId,
        id: id,
      },
    })
      .then(function (response) {
        // handle success
        setDetailDiagnosticResult(response);
        // console.log(detailDiagnosticResults);
      })
      .catch(function (error) {
        // handle error
        console.log("Error:", error);
      });
  };

  function RtfToTextConverter(rtfContent) {
    const [plainText, setPlainText] = useState("");

    
    // Convert RTF (HTML) to plain text
    const html = String.fromCharCode.apply(null, new Uint8Array(rtfContent));
    const converter = new HTMLtoReact.Parser();
   // const reactElement = converter.parse(html);
    // const plainTexts = htmlToText.fromString(reactElement);
    setPlainText(converter);

    return plainText;
  }

  return (
    <>
      <h2>LIST Chi tiết CDHA</h2>
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>Thời gian</th>
              <th>Bác Sĩ </th>
              <th>Tên CDHA</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            {listDiagnosticResults.map((listDiagnosticResult, index) => {
              return (
                <tr>
                  <td>{listDiagnosticResult.typename}</td>
                  <td>{listDiagnosticResult.doctorName}</td>
                  <td>{listDiagnosticResult.name}</td>

                  <button
                    onClick={viewCDHA(
                      decodeURIComponent(listDiagnosticResult.createDate),
                      listDiagnosticResult.technicalId,
                      listDiagnosticResult.id
                    )}
                  >
                    Chi Tiết
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h2>LIST Kết quả CDHA</h2>
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>Mô Tả</th>
              <th>Kết Luận</th>
              <th>Đề nghị</th>
            </tr>
          </thead>
          <tbody>
            {[detailDiagnosticResults].map((listDiagnosticResult, index) => {
              return (
                <tr>
                  <td>
                    {/* {RtfToTextConverter(listDiagnosticResult.description)} */}
                    {listDiagnosticResult.description}
                  </td>
                  <td>{listDiagnosticResult.conclusion}</td>
                  <td>{listDiagnosticResult.indication}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChiTietCDHA;
