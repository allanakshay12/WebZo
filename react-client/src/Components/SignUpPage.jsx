import React, { Component } from 'react';
import NavBar from './HeaderComponent/NavBar';
import FootBar from './FooterComponent/Footer';
import SignUpPageComponent from './SignUpComponent/SignUpBox'

class SignUpPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SignUpPageComponent />
        <FootBar />
      </div>
    )
  }
}

export default SignUpPage;