import React, { useState } from 'react'
import {MdVisibilityOff,MdVisibility}from 'react-icons/md'
import Input from '../input/Input'
import { isEmpty, isLength, isMatch } from '../helpers/validate'
import { toast } from 'react-toastify'
import { url } from '../helpers/url'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const initialState = {
    password:"",
    cf_password:""
}

const Reset = () => {
    const [visible,setVisible] = useState(false)
    const [data,setData] = useState(initialState)

    const {password, cf_password} = data
    const {token} = useParams()

    const handleClick = ()=>{
        setVisible(!visible)
    }

    const handleChange = (e)=>{
        setData({...data,[e.target.name]: e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        //check fields
        if(isEmpty(password) || isEmpty(cf_password)) return toast.error("Please fill in all the fields.")
        if(isLength(password)) return toast.error("Password must be atleast 6 characters.")
        if(!isMatch(password,cf_password)) return toast.error("Password does not match.")
        try {
            await axios.post(`${url}/api/auth/reset_pass`,{password},{
                headers:{
                    Authorization:token
                }
            })
            toast.success("Password changed successfully")
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <Input
            name="password"
            type={visible? "text": "password"}
            text="Password"
            icon={visible? <MdVisibility/>: <MdVisibilityOff/>}
            handleClick={handleClick}
            handleChange={handleChange}
            />
        <Input
            name="cf_password"
            type={visible? "text": "password"}
            text="Confirm Password"
            icon={visible? <MdVisibility/>: <MdVisibilityOff/>}
            handleClick={handleClick}
            handleChange={handleChange}
        />
        <div className="login_btn">
            <button>Reset</button>
        </div>
    </form>
  )
}

export default Reset