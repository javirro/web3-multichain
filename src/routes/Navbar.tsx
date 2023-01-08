import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import NavBarSelector from '../components/NavBarSelector'

const NavBar = () => {

  return (
  <div className="navbar-container">
    <NavLink to="/blockchain" className="navbar-link" >Blockchain</NavLink>
    <NavLink to="/tx" className="navbar-link"> Tx </NavLink>
    <NavBarSelector />
  </div>)
}

export default NavBar