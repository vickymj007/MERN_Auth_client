import React from 'react'
import './appbar.css'
import Avatar from '../Avatar/Avatar'
import {BiMenuAltLeft} from 'react-icons/bi'

const Appbar = ({handleSidebar}) => {
  return (
    <div className="appbar">
        <div className="appbar_wrapper">
            <div className="appbar_logo">
                {/* logo */}
                <img src="./assets/img/shuttle2.svg" alt="logo" />
                <p>MERNAUTH</p>
            </div>
            {/* avatar */}
            <div className="appbar_avatar">
                <Avatar/>
                <BiMenuAltLeft onClick={handleSidebar}/>
            </div>
        </div>
    </div>
  )
}

export default Appbar