import React, { Component } from 'react';
import NavBar from './HeaderComponent/NavBar';
import FootBar from './FooterComponent/Footer';
import TestimonialFeed from './TestimonialComponent/TestimonialFeed';
import TestimonialSubmit from './TestimonialComponent/TestimonialSubmit';

class Testimonials extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="Page-Content">
          
          <TestimonialFeed />
          <TestimonialSubmit />

        </div>
        <FootBar />
      </div>
    )
  }
}

export default Testimonials;