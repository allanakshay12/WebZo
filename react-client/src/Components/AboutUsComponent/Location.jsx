import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class='jumbotron'>
                <h2>Locate Us!</h2>
                <br />
                <iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4037475603363!2d77.62907491482244!3d13.009941490830682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16de187748c7%3A0x6d135e69edef62b9!2s164%2F2%2C+1st+B+Cross+Rd%2C+Janakiram+Layout%2C+Kanakadasa+Layout%2C+Lingarajapuram%2C+Bengaluru%2C+Karnataka+560084!5e0!3m2!1sen!2sin!4v1554025551076!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    )
  }
}

export default Location;