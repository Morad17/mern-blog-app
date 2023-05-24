import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn ] = useState(false)

  const loginMethod = async (e) => {
    e.preventDefault();
    try{
      await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}})
    } catch(err) {
    err = new Error()
    setLoggedIn(false)
  }
  setLoggedIn(true)
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