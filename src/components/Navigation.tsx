import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='flex
    justify-between
    px-5 h-[50px]
  bg-gray-200
    items-center
    shadow-md'>
      <p>Logo</p>
      <div className='flex gap-2 h-50px'>
        <Link to="auth">Auth</Link>
        <Link to="setting">Setting</Link>
      </div>
    </nav>
  )
}

export default Navigation