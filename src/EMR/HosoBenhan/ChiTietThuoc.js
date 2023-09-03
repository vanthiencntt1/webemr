import { useState } from "react";
import HosoBenan from "./HosoBenan";
import "./ChiTietCDHA.css";
import * as ServerApi from "../../ServerAPI/ServerApi";




const ChiTietThuoc = (createDate, id) => {
    const [detaitPrescriptions, setDetaitPrescription] = useState([]);

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
          <table className="table">
            <ul>
            
              <tr>
                <td>SST</td>
                <td>active</td>
                <td>name</td>
                <td>unit</td>
                <td>routeOfUse</td>
                <td>usage</td>
                <td>numberOfDays</td>
                <td>quantity</td>
                <td>note</td>
              </tr>
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
            </ul>
          </table>
        </>
      );
    

//   return (
//     <>
//       <h2>Responsive Table</h2>
//       <div class="table-wrapper">
//         <table class="fl-table">
//           <thead>
//             <tr>
//               <th>Header 1</th>
//               <th>Header 2</th>
//               <th>Header 3</th>
//               <th>Header 4</th>
//               <th>Header 5</th>
//             </tr>
//           </thead>
//           <tbody>

//           <tr>
//             <td>Content 1</td>
//             <td>Content 1</td>
//             <td>Content 1</td>
//             <td>Content 1</td>
//             <td>Content 1</td>
//         </tr>
//         <tr>
//             <td>Content 2</td>
//             <td>Content 2</td>
//             <td>Content 2</td>
//             <td>Content 2</td>
//             <td>Content 2</td>
//         </tr>
//         <tr>
//             <td>Content 3</td>
//             <td>Content 3</td>
//             <td>Content 3</td>
//             <td>Content 3</td>
//             <td>Content 3</td>
//         </tr>
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
};

export default ChiTietThuoc; 
