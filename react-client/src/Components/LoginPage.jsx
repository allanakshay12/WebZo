import React, { Component } from 'react';
import NavBar from './HeaderComponent/NavBar';
import FootBar from './FooterComponent/Footer';
import LoginComponent from './LoginComponent/LoginBox'

class LoginPage extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <LoginComponent />
        <FootBar />
      </div>
    )
  }
}

export default LoginPage;