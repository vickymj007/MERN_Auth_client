import React, { useState } from 'react'
import './login.css'
import Input from '../input/Input'
import {FcGoogle}from 'react-icons/fc'
import {MdVisibilityOff,MdVisibility}from 'react-icons/md'


const Login = () => {

  const [visible,setVisible] = useState(false)

  const handleClick = ()=>{
    setVisible(!visible)
  }

  return (
    <form className='login'>
      <Input
        type="text"
        text="Email"
      />
      <Input
        type={visible? "text": "password"}
        text="Password"
        icon={visible? <MdVisibility/>: <MdVisibilityOff/>}
        handleClick={handleClick}
      />
      <div className="login_btn">
        <button>Login</button>
        <button className='btn-alt'>Sign in <FcGoogle/></button>
      </div>
    </form>
  )
}

export default Login