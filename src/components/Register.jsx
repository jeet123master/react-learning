import React, { useState } from 'react'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")

    const signUp = () => {
        let item = {name,email,password}
        console.log(item)
    }
  return (
    <div className='col-sm-6 offset-sm-3'>
        <h1>Register Page</h1>
        <input 
            type="text"
            className='form-control'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
        /><br />
        <input 
            type="text"
            className='form-control'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input 
            type="password"
            className='form-control'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button 
            className='btn btn-primary'
            onClick={signUp}
        >
            Sign Up
        </button>
    </div>
  )
}

export default Register