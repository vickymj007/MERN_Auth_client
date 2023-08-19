import React from 'react'
import './activatelayout.css'
import { useNavigate } from 'react-router-dom'

const ActivateLayout = () => {
    const navigate = useNavigate()

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