import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function navbar() {
  return (
    <div className='flex bg-black font-comic text-white-500'>
      <img src={logo} alt="ICOMIC Logo" className='' />
      <div className=''>
        <Link to="/profile" className='flex-center font-extrabold text-lg' >Profile</Link>
      </div>
    </div>
  )
}
