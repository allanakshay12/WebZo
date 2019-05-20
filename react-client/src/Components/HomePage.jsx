import React, { Component } from 'react';
import VideoPlayer from './VideoComponent/VideoPlayer';
import NavBar from './HeaderComponent/NavBar';
import FootBar from './FooterComponent/Footer';

class HomePage extends Component {



  render() {
    return (
      <div>
      
        <div className="Page-Content">
          
          <VideoPlayer />
          
        </div>
       
      </div>
    )
  }
}

export default HomePage;