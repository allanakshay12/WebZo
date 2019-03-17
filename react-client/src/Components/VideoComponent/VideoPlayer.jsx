import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class VideoPlayer extends Component {
  render() {
    return (
      <ReactPlayer url='https://www.youtube.com/watch?v=YCpeXxJjEaQ' playing controls width="100%" height="700px" />
    )
  }
}

export default VideoPlayer;