import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'

import img from '../assets/logo.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo'>
        <NavLink to='/'>
          <img src={img} alt='logo' />
        </NavLink>
      </div>
      <NavBar />
    </div>
  )
}

export default Header
