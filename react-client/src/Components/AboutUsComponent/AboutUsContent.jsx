import React, { Component } from 'react';

class AboutUsContent extends Component {
  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3>About Us</h3>
                </div>
                <div class="panel-body">
                    <div class="media">
                        
                        <div class="media-body">
                            <br />
                            <h3 class="media-heading">Who are we?</h3>
                            <p>We are a group of people who work towards the betterment of the environment by encouraging the society to cycle on a regualr basis to improve upon themselves and make the wrold greener!</p>
                            <br />
                            <br />
                            <h3 class="media-heading">What we do?</h3>
                            <p>We provide a platform for the people to rent cycles and use it whenever required.</p>
                            <br />
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
  }
}

export default AboutUsContent;