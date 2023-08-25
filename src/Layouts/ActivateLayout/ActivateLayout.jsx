import React, { useEffect } from 'react'
import './activatelayout.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import { url } from '../../components/helpers/url'

const ActivateLayout = () => {
    const navigate = useNavigate()
    const {activation_token} = useParams()

    useEffect(()=>{
      //check token
      if(activation_token){
        const activateUser = async ()=>{
          try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(`${url}/api/auth/activation`,{activation_token})
            toast.success(response.data.msg)
          } catch (error) {
            toast.error(error.response.data.msg)
          }
        }
        activateUser()
      }
    },[activation_token])

    const handleClick =()=>{
        navigate("/")
    }

  return (
    <div className="activate">
        <p>Ready to Login? 👉<span onClick={handleClick}>Here</span></p>
    </div>
  )
}

export default ActivateLayout