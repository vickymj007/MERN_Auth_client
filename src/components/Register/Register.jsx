import React, { useState } from 'react'
import Input from '../input/Input'
import {MdVisibilityOff,MdVisibility}from 'react-icons/md'
import { isEmail,isLength,isEmpty,isMatch } from '../helpers/validate'
import axios from 'axios'
import {toast} from 'react-toastify'
import { url } from '../helpers/url'


const initialState = {
    name:"",
    email:"",
    password:"",
    confirmPassword:""
}

const Register = () => {
    axios.defaults.withCredentials = true;
    const [visible,setVisible]=useState(false)

    const [data,setData] = useState(initialState)
    const {name,email,password,confirmPassword} = data

    const handleChange = (e)=>{
        setData({...data,[e.target.name] : e.target.value})
    }

    const register = async (e)=>{
        e.preventDefault()

        //check fields
        if(isEmpty(name) || isEmpty(password)) return toast.error("Please fill in all the fields!.")

        //check email
        if(!isEmail(email)) return toast.error("Please enter a valid email!.")

        //check password length
        if(isLength(password)) return toast.error("Password must be atleast 6 characters!.")

        //check password match
        if(!isMatch(password,confirmPassword)) return toast.error("Password does not match!.")

        //success
        try {
            const response = await axios.post(`${url}/api/auth/register`,{name,email,password})
            toast.success(response.data.msg)
            handleReset()
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    const handleClick = ()=>{
        setVisible(!visible)
    }

    const handleReset = ()=>{
        Array.from(document.querySelectorAll('input')).forEach(input=>{
            input.value = ""
        })
        setData({name:"",email:"",password:"",confirmPassword:""})
    }

  return (
    <form onSubmit={register}>
        <Input 
            type="text" 
            text="Name" 
            name="name" 
            handleChange={handleChange}
        />
        <Input 
            type="email" 
            text="Email" 
            name="email" 
            handleChange={handleChange}
        />
        <Input 
            type={visible? "text":"password"} 
            name="password" 
            icon={visible?<MdVisibility/>:<MdVisibilityOff/>} 
            text="Password" 
            handleClick={handleClick}
            handleChange={handleChange}
        />
        <Input 
            type={visible? "text":"password"} 
            name="confirmPassword" 
            icon={visible?<MdVisibility/>:<MdVisibilityOff/>} 
            text="Re-enter Password" 
            handleClick={handleClick}
            handleChange={handleChange}
        />
        <div className="login_btn">
            <button>Register</button>
        </div>
    </form>
  )
}

export default Register