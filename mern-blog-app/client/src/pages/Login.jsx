import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginMethod = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
  })}

  return (
    <form action="" onSubmit={loginMethod}>
      <h1>Login</h1>
      <input type="text" placeholder="username" 
      value={username} onChange={e => setUsername(e.target.value)}/>
      
      <input type="text" placeholder="password" 
      value={password} onChange={e => setPassword(e.target.value)}/>
    <button >Login</button>
    </form>
  )
}

export default Login