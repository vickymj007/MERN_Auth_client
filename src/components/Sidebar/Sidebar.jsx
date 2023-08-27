import React, { useContext } from 'react'
import './sidebar.css'
import {BiBookContent,BiUserCircle,BiLogOut} from 'react-icons/bi'
import { url } from '../helpers/url'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'

const Sidebar = () => {
    const {dispatch} = useContext(AuthContext)

    const handleClick = async (e)=>{
        e.preventDefault()
        try {
            await axios.get(`${url}/api/auth/signout`)
            localStorage.removeItem("_appSignIn")
            dispatch({type:"SIGN_OUT"})
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="sidebar">
        <div className="sidebar_menu">
            <ul>
                <li>
                    <BiBookContent/>
                    <p>FEED</p>
                </li>
                <li>
                    <BiUserCircle/>
                    <p>PROFILE</p>
                </li>
                <li onClick={handleClick}>
                    <BiLogOut/>
                    <p>LOGOUT</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar