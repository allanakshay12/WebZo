import React, { Component } from 'react';
import avatar from '../../assets/images/img_avatar1.png';
class TestimonialFeed extends Component {
  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3>Title</h3>
                </div>
                <div class="panel-body">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src={avatar} class="media-object TestimonialImage" />
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">Name</h3>
                            <p>Content</p>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
  }
}

export default TestimonialFeed;