import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
class NavBar extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <img className="NavLogo" src={logo} alt="" />
              <div class="navbar-brand">WebZo</div>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a class="Navbar-Button" href="#">Home</a></li>
              <li><a class="Navbar-Button" href="#">Page 1</a></li>
              <li><a class="Navbar-Button" href="#">Page 2</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a class="Navbar-Button" href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a class="Navbar-Button" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;