import React, { Component } from 'react';
class TestimonialSubmit extends Component {
  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class="jumbotron">
            <h2>Submit your own Testimonial!</h2>
            <br />
              <div class="form-group">
                <label for="usr">Name</label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" />
              </div>
              <div class="form-group">
                <label for="comment">Testimonial</label>
                <textarea class="form-control" rows="5" id="comment"></textarea>
              </div>
              <button type="submit" class="btn btn-primary LoginPageElement LoginPageButton">Submit</button>
            </div>
        </div>
    )
  }
}

export default TestimonialSubmit;