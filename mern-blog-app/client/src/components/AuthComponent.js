import { useEffect, useState} from 'react'
import axios from 'axios'

import Cookies from 'universal-cookie'

const cookie = new Cookies()
const token = cookie.get("TOKEN")


  // config for api call
  


const AuthComponent = () => {
  const [message, setMessage ] = useState('')

  const logout = () => {
    //destroy cookie
    cookie.remove("TOKEN", { path: "/"})
    window.location.href = "/"
  }

  const config = {
    method: "get",
    url:"http://localhost:4000/auth-endpoint",
    headers: {
      authorization:`Bearer ${token}`
    }
  }
    //Set Auth Message
  useEffect( ()=> {
    axios(config)
      .then((result)=> {
        setMessage(result.data.message)
      })
      .catch((err)=>{
        err = new Error()
      })
    }, [])

  return (
    <div>
      <h1>Auth Component</h1>
      <h3>{message ? message : "You are not authorised"}</h3>
      <button onClick={(()=> logout())}>Logout</button>
    </div>
  )
}

export default AuthComponent