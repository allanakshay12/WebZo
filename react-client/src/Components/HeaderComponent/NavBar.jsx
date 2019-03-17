import React, { Component } from 'react';
import logo from '../../assets/logo/logo.png';

class NavBar extends Component {
 
  render() {
    {/*CurrentPage = () => {
      page: 0
    }*/}
    return (
      <header>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a href="/"><img className="NavLogo" src={logo} alt="" /></a>
              <a href="/"><div class="navbar-brand">WebZo</div></a>
            </div>
            <ul class="nav navbar-nav">
              <li><a class="Navbar-Button" href="/">Home</a></li>
              <li><a class="Navbar-Button" href="/products">Products</a></li>
              <li><a class="Navbar-Button" href="/testimonials">Testimonials</a></li>
              <li><a class="Navbar-Button" href="/aboutus">About Us</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a class="Navbar-Button" href="/loginpage"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a class="Navbar-Button" href="/loginpage"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;