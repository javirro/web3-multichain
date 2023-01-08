import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux"

const NavBar = () => {
  const chain = useSelector((s: any) => s.chain)
  console.log(chain)
  return (
  <div className="navbar-container">
    <NavLink to="/blockchain" className="navbar-link" >Blockchain</NavLink>
    <NavLink to="/tx" className="navbar-link"> Tx </NavLink>
    <div className="select-container">
      <select className="select-chain">
        <option>Ethereum</option>
        <option>Binance smart chain</option>
        <option>Polygon</option>
        <option>Fantom</option>
      </select>

    </div>
  </div>)
}

export default NavBar