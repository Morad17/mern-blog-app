import React, { useState } from 'react'
import Cookies from "universal-cookie"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn ] = useState(false)


  const cookie = new Cookies()
  const loginMethod = async (e) => {
    e.preventDefault();
    try{
      const result = 
        await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'}})
        // Moving token from server
        cookie.set("Token", result.data.token, {
          path: "/"
        })
        setLoggedIn(true)
        window.location.href = "/auth"
    } catch(err) {
    err = new Error()
    setLoggedIn(false)
  }
  
  
}


  return (
    <>
      <form action="" onSubmit={loginMethod}>
        <h1>Login</h1>
        <input type="text" placeholder="username" 
        value={username} onChange={e => setUsername(e.target.value)}/>
        
        <input type="text" placeholder="password" 
        value={password} onChange={e => setPassword(e.target.value)}/>
      <button >Login</button>
      </form>
      {
        loggedIn ? (<p>Successfully Logged In</p>) : (<p>Login Unsuccessfull</p>)
      }
    </>
    
  )
}

export default Login