import React, { useContext, useState } from 'react'
import './login.css'
import Input from '../input/Input'
import {FcGoogle}from 'react-icons/fc'
import {toast} from 'react-toastify'
import axios from 'axios'
import {MdVisibilityOff,MdVisibility}from 'react-icons/md'
import { url } from '../helpers/url'
import { AuthContext } from '../../context/authContext'
import { isEmail, isEmpty } from '../helpers/validate'


const Login = () => {

  const {dispatch} = useContext(AuthContext)
  axios.defaults.withCredentials = true;
  const [visible,setVisible] = useState(false)
  const [data,setData] = useState({name:"",email:""})
  const {email,password} = data

  const handleClick = ()=>{
    setVisible(!visible)
  }

  const handleChange = (e)=>{
    setData({...data,[e.target.name] : e.target.value})
  }

  const login = async(e)=>{
    e.preventDefault()

    //check fields
    if(isEmpty(email) || isEmpty(password)) return toast.error("Please fill in all the fields!.")

    //check email
    if(!isEmail(email)) return toast.error("Please enter a valid email!.")

    try {
      await axios.post(`${url}/api/auth/signin`,{email,password})
      localStorage.setItem("_appSignIn",true)
      dispatch({type:"SIGNIN"})
    } catch (error) {
      toast.error(error.response.data.msg) 
    }
  }


  return (
    <form className='login' onSubmit={login}>
      <Input
        type="text"
        text="Email"
        name="email"
        handleChange={handleChange}
      />
      <Input
        type={visible? "text": "password"}
        text="Password"
        icon={visible? <MdVisibility/>: <MdVisibilityOff/>}
        handleClick={handleClick}
        name="password"
        handleChange={handleChange}
      />
      <div className="login_btn">
        <button>Login</button>
        <button className='btn-alt'>Sign in <FcGoogle/></button>
      </div>
    </form>
  )
}

export default Login