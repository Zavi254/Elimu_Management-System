import React from 'react'

const Department = () => {
  return (
    <div className="container" style={{marginTop:'150px'}}>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID NO:</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Department