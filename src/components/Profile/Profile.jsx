import React, { useContext, useRef, useState } from 'react'
import {AiFillCamera} from 'react-icons/ai'
import './profile.css'
import Avatar from '../Avatar/Avatar';
import Input from '../input/Input'
import {MdVisibilityOff,MdVisibility}from 'react-icons/md'
import { AuthContext } from '../../context/authContext';


const Profile = () => {
    const [visible,setVisible]=useState(false)

    const {user} = useContext(AuthContext)

    const inputFile = useRef(null);
    
    const handleClick = ()=>{
        setVisible(!visible)
      }
    const handleInput = ()=>{
        inputFile.current.click()
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <div className="profile">
        <div className="profile_avatar">
            <div className="profile_avatar_wrapper" onClick={handleInput}>
                <Avatar/>
                <AiFillCamera/>
            </div>
            <input 
                type="file" 
                className="profile_avatar_input" 
                name='avatar'
                ref={inputFile}
            />
        </div>
        <form onSubmit={handleSubmit} className="profile_input">
            <div className="profile_input_form">
            <Input type="text" text="Name" defaultValue={user.name}/>
            <Input type="email" text="Email" defaultValue={user.email} disabled/>
            <Input type={visible? "text":"password"} icon={visible?<MdVisibility/>:<MdVisibilityOff/>} text="Password" handleClick={handleClick}/>
            <Input type={visible? "text":"password"} icon={visible?<MdVisibility/>:<MdVisibilityOff/>} text="Re-enter Password" handleClick={handleClick}/>
            <div className="login_btn">
                <button disabled>Update</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Profile