import React, { Component } from 'react';
import Carousel from './CarouselComponent/Carousel';
import VideoPlayer from './VideoComponent/VideoPlayer';
import NavBar from './HeaderComponent/NavBar';
import FootBar from './FooterComponent/Footer';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="Page-Content">
          
          <VideoPlayer />
          
        </div>
        <FootBar />
      </div>
    )
  }
}

export default AboutUs;