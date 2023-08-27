import React, { useState } from 'react'
import Input from '../input/Input'
import { isEmail, isEmpty } from '../helpers/validate'
import { toast } from 'react-toastify'
import axios from 'axios'
import { url } from '../helpers/url'

const Forgot = () => {

  const [email,setEmail] = useState("")
  
  const handleChange = (e)=>{
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    if(isEmpty(email)) return toast.error("Please enter your email")
    if(!isEmail(email)) return toast.error("Please enter a valid email address")

    try {
      await axios.post(`${url}/api/auth/forgot_pass`,{email})
      setEmail("")
      toast.success("Please check your email.")
    } catch (error) {
      toast.error(error.response.data.msg)
    }

  }

  return (
    <form onSubmit={handleSubmit}>
        <Input type="text" text="Email" name="email" handleChange={handleChange}/>
        <div className="login_btn">
            <button>Send</button>
        </div>
    </form>
  )
}

export default Forgot