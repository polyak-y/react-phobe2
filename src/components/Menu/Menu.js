import React  from 'react'
import {NavLink} from 'react-router-dom' 
import './Menu.scss'
import logo from '../../img/network.svg'

const Menu = () => {
  return (
    <>
      <nav className="Menu light-blue darken-3">
        <div className="nav-wrapper">
          <img className="logo" src={logo} alt=""/>
          <h3>Телефонный справочник v3.0</h3>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/" activeClassName="myActiveStyle" exact>Справочник</NavLink>  
            </li>
            <li>
              <NavLink to="/add"  activeClassName="myActiveStyle">Добавить номер</NavLink>  
            </li> 
          </ul>
        </div>
      </nav>    
    </>
  )
}

export default Menu