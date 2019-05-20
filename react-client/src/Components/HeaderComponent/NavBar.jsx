import React, { Component } from 'react';
import logo from '../../assets/logo/logo.png';

class NavBar extends Component {

  
  render() {
    return (
      <header>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span> 
              </button>
              <a href="/"><img className="NavLogo" src={logo} alt="" /></a>
              <a href="/"><div class="navbar-brand">WebZo</div></a>
              
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/aboutus">About Us</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="/loginpage" id="navbar_login"><span class="glyphicon glyphicon-log-in"></span> Account</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;