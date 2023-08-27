import React from 'react'
import './avatar.css'
import avatar from '../assets/profile.png'

const Avatar = () => {


  return (
    <div className="avatar">
        <img src={avatar} alt="avatar" />
    </div>
  )
}

export default Avatar