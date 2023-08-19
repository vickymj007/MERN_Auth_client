import React from 'react'
import Avatar from '../Avatar/Avatar'
import './feed.css'

const Feed = () => {
  return (
    <div className="feed">
        <div className="feed_date">
            <Avatar/>
            <p>12/08/2023</p>
        </div>
        <div className="feed_img">
            <img src="https://source.unsplash.com/random" alt="feed_image" />
        </div>
        <div className="feed_content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi in eos rem totam ullam laboriosam numquam laudantium voluptatum quaerat accusantium.</p>
        </div>
    </div>
  )
}

export default Feed