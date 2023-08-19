import './authLayout.css'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import Forgot from '../../components/Forgot/Forgot'
import { useState } from 'react'

const AuthLayout = () => {
  const [login,setLogin] = useState(true)
  const [register,setRegister] = useState(false)
  const [forgot,setForgot] = useState(false)

  const handleLogin = ()=>{
    setLogin(true)
    setRegister(false)
    setForgot(false)
  }
  const handleRegister = ()=>{
    setLogin(false)
    setRegister(true)
    setForgot(false)
  }
  const handleForgot = ()=>{
    setLogin(false)
    setRegister(false)
    setForgot(true)
  }
  return (
    <div className='authlayout'>
        <div className="authlayout_logo">
            <img src="./assets/img/shuttle2.svg" alt="logo" />
        </div>
        {login && <Login/>}
        {register && <Register/>}
        {forgot && <Forgot/>}
        <div className="authlayout_actions">
            <p 
              className="authlayout_actions-l" 
              onClick={login? handleRegister:handleLogin}
            >{login ? "Register?" : "Login?"}</p>
            <p 
              className="authlayout_actions-r"
              onClick={handleForgot}
            >Forgot password?</p>
        </div>
    </div>
  )
}

export default AuthLayout