import React, { useRef, useState } from 'react'
import {AiFillCamera} from 'react-icons/ai'
import './profile.css'
import Avatar from '../Avatar/Avatar';
import Input from '../input/Input'
import {MdVisibilityOff,MdVisibility}from 'react-icons/md'

const Profile = () => {
    const [visible,setVisible]=useState(false)

    const inputFile = useRef(null);
    
    const handleClick = ()=>{
        setVisible(!visible)
      }
    const handleInput = ()=>{
        inputFile.current.click()
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
        <form className="profile_input">
            <div className="profile_input_form">
            <Input type="text" text="Name"/>
            <Input type="email" text="Email"/>
            <Input type={visible? "text":"password"} icon={visible?<MdVisibility/>:<MdVisibilityOff/>} text="Password" handleClick={handleClick}/>
            <Input type={visible? "text":"password"} icon={visible?<MdVisibility/>:<MdVisibilityOff/>} text="Re-enter Password" handleClick={handleClick}/>
            <div className="login_btn">
                <button>Update</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Profile