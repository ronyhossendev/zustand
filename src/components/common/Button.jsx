import React from 'react'

const Button = ({btnText,className}) => {
  return (
    <button className={`py-4 px-6 rounded-2xl bg-pink-400 text-white font-black text-2xl ${className}`}>{btnText}</button>
    
  )
}

export default Button







