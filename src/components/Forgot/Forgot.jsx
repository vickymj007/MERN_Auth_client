import React from 'react'
import Input from '../input/Input'

const Forgot = () => {
  return (
    <form>
        <Input type="text" text="Email"/>
        <div className="login_btn">
            <button>Send</button>
        </div>
    </form>
  )
}

export default Forgot