import React from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const Student = () => {
  return (
    <div className="container" style={{marginTop:'150px'}}>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID NO:</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>DOB</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>22</td>
            <td>Male</td>
            <th>12/03/2000</th>
            <td><UpdateButton /></td>
            <td><DeleteButton /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Student;
