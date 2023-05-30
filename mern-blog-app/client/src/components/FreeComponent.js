import { useEffect, useState } from "react"
import axios from "axios"

const FreeComponent = () => {
  const [message, setMessage ] = useState('')

  // Set Auth Message
  useEffect(()=> {
    // config for api call
    const config = {
      method: "get",
      url:"http://localhost:4000/free-endpoint"
    }
    axios(config)
      .then((result)=>{
        setMessage(result.data.message)
    })
      .catch((err) => {
        err = new Error()
      }) 
    }, [])

  return (
    <div className="">
      <h1>Free Component</h1>
      <h3 className="free-component-message">{message ? message: "You are not authorised"}</h3>
    </div>
  )
}

export default FreeComponent