import React from 'react'

const UserTable = ({ data }) => {
  return (
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>First name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            { data.map((item)=> {
                return (
                    <tr key={item.id}>
                        <th>{item.first_name}</th>
                        <th>{item.last_name}</th>
                        <th>{item.email}</th>
                        <th>{item.gender}</th>
                    </tr>
                )
            })}
            
        </tbody>
    </table>
  )
}

export default UserTable