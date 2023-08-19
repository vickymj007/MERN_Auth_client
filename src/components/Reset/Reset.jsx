import React, { useState } from 'react'
import {MdVisibilityOff,MdVisibility}from 'react-icons/md'
import Input from '../input/Input'


const Reset = () => {
    const [visible,setVisible] = useState(false)

    const handleClick = ()=>{
        setVisible(!visible)
    }

  return (
    <form>
        <Input
            type={visible? "text": "password"}
            text="Password"
            icon={visible? <MdVisibility/>: <MdVisibilityOff/>}
            handleClick={handleClick}
        />
        <Input
            type={visible? "text": "password"}
            text="Confirm Password"
            icon={visible? <MdVisibility/>: <MdVisibilityOff/>}
            handleClick={handleClick}
        />
        <div className="login_btn">
            <button>Reset</button>
        </div>
    </form>
  )
}

export default Reset