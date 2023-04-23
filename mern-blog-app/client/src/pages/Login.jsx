import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = (e) => {
    e.preventDefault();
    async fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
  }
  return (
    <form action="" onSubmit={login}>
      <h1>Login</h1>
      <input type="text" placeholder="username" value={username} onChane={e => setUsername(e.target.value)}/>
      <input type="text" placeholder="password" value={password} onChane={e => setPassword(e.target.value)}/>
    </form>
  )
}

export default Login