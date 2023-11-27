
import React from 'react'


const Data = ({dataList}) => {
    

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            dataList.map((el)=>{
              
              return(
                <tr key={dataList._id}>
                  <td>{el.name}</td>
                  <td>{el.gender}</td>
                  <td>{el.nationality}</td>
                  <td>{el.email}</td>
                  <td>{el.phoneNumber}</td>
                  <td>{el.address}</td>
                  <td>{el.message}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
    </div>
  )
}

export default Data