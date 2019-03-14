import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
class NavBar extends Component {
  render() {
    return (
      <header>
        <div>
          <img className="NavLogo" src={logo} alt="" />
          <div className="Logo_Text">WebZo</div>
        </div>
        <ul id="headerButtons">
          <li className="navButton"><Link to="#">Home</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;