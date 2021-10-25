import { NavLink } from 'react-router-dom'

import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/skills'>My Skills</NavLink>
          </li>
          <li>
            <NavLink to='/work'>Work</NavLink>
          </li>
          <li>
            <NavLink to='/contact'> Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default NavBar
