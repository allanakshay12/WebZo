import React, { Component } from 'react';
import Location from './AboutUsComponent/Location';
import NavBar from './HeaderComponent/NavBar';
import FootBar from './FooterComponent/Footer';
import Content from './AboutUsComponent/AboutUsContent';
import Contact from './AboutUsComponent/ContactDetails';

class AboutUs extends Component {
  render() {
    return (
      <div>
        
        <div className="Page-Content">
          <Content />
          <Location />
          <Contact />
        </div>
        <br />
        <br />
        
      </div>
    )
  }
}

export default AboutUs;