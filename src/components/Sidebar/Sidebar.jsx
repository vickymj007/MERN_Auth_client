import React from 'react'
import './sidebar.css'
import {BiBookContent,BiUserCircle,BiLogOut} from 'react-icons/bi'

const Sidebar = () => {
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
                <li>
                    <BiLogOut/>
                    <p>LOGOUT</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar