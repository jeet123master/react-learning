import React, { useState } from 'react'
import Axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const handleApi = () => {
        console.log({email, password})
        Axios
            .post('https://reqres.in/api/login', {
                email: email,
                password: password
            })
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
  return (
    <div>
        Email: 
        <input 
            type="text" 
            value={email}
            onChange={handleEmail}
        /> 
        <br /><br />
        Password: 
        <input 
            type="password"
            value={password} 
            onChange={handlePassword}
        /> 
        <br /><br />
        <button
            onClick={handleApi}
        >
            Login
        </button>
    </div>
  )
}

export default Login