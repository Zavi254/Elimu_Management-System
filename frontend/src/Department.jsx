import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Department = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/departments')
      .then(res => res.json())
      .then(data => setData(data))
  },[])

  return (
    <div className="container" style={{marginTop:'150px'}}>
      <table className="table bg-white" style={{fontSize:'1.3rem'}}>
        <thead className="table-dark">
          <tr>
            <th>NO:</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Department