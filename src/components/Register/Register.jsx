import React, { useState } from 'react'
import Input from '../input/Input'
import {MdVisibilityOff,MdVisibility}from 'react-icons/md'

const Register = () => {
    const [visible,setVisible]=useState(false)

    const handleClick = ()=>{
        setVisible(!visible)
      }

  return (
   <form>
    <Input type="text" text="Name"/>
    <Input type="email" text="Email"/>
    <Input type={visible? "text":"password"} icon={visible?<MdVisibility/>:<MdVisibilityOff/>} text="Password" handleClick={handleClick}/>
    <Input type={visible? "text":"password"} icon={visible?<MdVisibility/>:<MdVisibilityOff/>} text="Re-enter Password" handleClick={handleClick}/>
    <div className="login_btn">
        <button>Register</button>
    </div>
   </form>
  )
}

export default Register