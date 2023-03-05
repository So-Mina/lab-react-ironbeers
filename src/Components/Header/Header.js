import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Header.css'

function Header({children}) {

  return (
    <div className='Header'>
      <div className='HeaderDiv'>
        <Link to='/'><i class="fa-solid fa-house"></i></Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Header