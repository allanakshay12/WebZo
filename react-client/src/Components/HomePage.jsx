import React, { Component } from 'react';
import Carousel from './CarouselComponent/Carousel';
import VideoPlayer from './VideoComponent/VideoPlayer';

class HomePage extends Component {
  render() {
    return (
      <div className="Page-Content">
        
        <VideoPlayer />
        
      </div>
    )
  }
}

export default HomePage;