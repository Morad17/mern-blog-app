import React, { useState } from 'react'

const Register = () => {

  const [username, setUsername ] = useState()
  const [password, setPassword] = useState()

  const  register = async (e) => {
    e.preventDefault()
   await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
    })
  }

  return (
    <form action="" onSubmit={register}>
      <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
      <input type="text" placeholder="password" onChange={e => setPassword(e.target.value)}/>
      <button type="submit">Register</button>
    </form>
  )
}

export default Register