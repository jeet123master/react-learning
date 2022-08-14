import React, { useState } from 'react'
import { Users } from '../users'
import UserTable from './UserTable'
const UsersList = () => {
    const [query, setQuery] = useState("")

    const keys = ["first_name", "last_name", 'email', "gender"]

    const search = (data) => {
        return data.filter((item) => 
            keys.some((key) => item[key].toLowerCase().includes(query))
        );
    }
    
  return (
    <div className='col-md-6 offset-3 my-2'>
        <input 
            className='form-control '
            type="text" 
            placeholder='Search.....'
            onChange={(e) => setQuery(e.target.value)}
        /><br />
        <UserTable data={search(Users)} />
    </div>
  )
}

export default UsersList