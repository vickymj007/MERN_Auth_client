import React from 'react'
import './input.css'

const Input = ({icon,type,text,name,handleChange,handleClick,defaultValue,disabled}) => {
  return (
    <div className="input">
        <label>
            <div 
                className="input_icon"
                onClick={handleClick}
            >{icon}</div>
            <input 
                type={type}
                name={name}
                onChange={handleChange}
                defaultValue={defaultValue}
                placeholder='&nbsp;'
                disabled={disabled}
                autoComplete='off'
            />
            <span>{text}</span>           
        </label>
    </div>
  )
}

export default Input