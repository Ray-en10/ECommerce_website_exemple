import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.png'

function Navbarafter() {
  const [showDropdown, setShowDropdown] = useState(false)
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = () =>
  {
    localStorage.clear();
    navigate('Sign.js')
  }

  return (
    <div>
      <div className='header'>
        <Link to='/'><img className='logo' src={logo} alt="Logo" /></Link>
        <ul className='nav-menu'>
          <li>
            <Link className='nva' to='/'>Home</Link>
          </li>
          <li>
            <Link className='nva2' onClick={() => setShowDropdown(!showDropdown)}>Product</Link>
            {showDropdown && (
              <ul className='dropdown-menu'>
                <li><Link to='#PROMOTION' className='menudrop'>Promotion</Link></li>
                <li><Link to='#Tvs' className='menudrop'>TVs</Link></li>
                <li><Link to='#pcs' className='menudrop'>PCs</Link></li>
                <li><Link to='#lap' className='menudrop'>Laptops</Link></li>
                <li><Link to='#acc' className='menudrop'>Accessories</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link className='nva' to='/'>Contact</Link>
          </li>
        </ul>
        {
        auth ?  <button className='button1'><Link onClick={logout} className='but' to='/Sign'>Log out {JSON.parse(auth.name)}</Link></button>: <>
        <div className='but1'>
          <button className='button1'><Link className='but' to='/Sign'>Sign Up</Link></button>
        </div>
        </>
        }
      </div>
    </div>
  )
}

export default Navbarafter
