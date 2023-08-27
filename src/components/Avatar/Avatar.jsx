import React, { useContext } from 'react'
import './avatar.css'
import { AuthContext } from '../../context/authContext'

const Avatar = () => {

  const {user} = useContext(AuthContext)

  return (
    <div className="avatar">
        <img src={user.avatar} alt="avatar" />
    </div>
  )
}

export default Avatar