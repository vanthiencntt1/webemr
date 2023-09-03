
 import React from "react";
import * as ServerApi from "../../ServerAPI/ServerApi";
import "./ChiTietCDHA.css";
//import * as HosoBenan from "./HosoBenan";


const ChiTietCDHA =(mabn,selectedYear)=>  {


    ServerApi.GetListDiagnosticResult("", {
        params: {
            patientCode: mabn,
            yearTreatment: selectedYear,
        },
      })
        .then(function (response) {
          // handle success
          console.log(response)
      
        })
        .catch(function (error) {
          // handle error
          console.log("Error:", error);
        });

  


  return (
    <>
      <h2>Responsive Table</h2>
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>Header 5</th>
            </tr>
          </thead>
          <tbody>

          <tr>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
        </tr>
        <tr>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
        </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChiTietCDHA;
