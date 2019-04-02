import React, { Component } from 'react';
import avatar from '../../assets/images/ContactUs.jpg';
class ContactDetails extends Component {
  render() {
    return (
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3>Contact Us</h3>
                </div>
                <div class="panel-body">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src={avatar} class="media-object TestimonialImage" />
                        </div>
                        <div class="media-body">
                            <br />
                            <h3 class="media-heading">Jerry Allan Akshay</h3>
                            <p>+91-9663829842</p>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
  }
}

export default ContactDetails;