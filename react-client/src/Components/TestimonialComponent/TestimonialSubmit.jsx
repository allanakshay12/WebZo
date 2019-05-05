import React, { Component } from 'react';
class TestimonialSubmit extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);

  }

  addItem(e)
  {
      if(this._InputName.value !== "" && this._InputTitle.value !== "" && this._InputContent.value !== "") {
        var newItem = {
          name: this._InputName.value,
          title: this._InputTitle.value,
          content: this._InputContent.value,
          key: Date.now()
        };

        fetch(`http://localhost:8080/testimonials/add?name=${newItem.name}&title=${newItem.title}&content=${newItem.content}`);

        this.setState ( (prevState) => { return { items: prevState.items.concat(newItem) } } );
        
        this._InputName.value = "";
        this._InputTitle.value = "";
        this._InputContent.value = "";

        console.log(this.state.items);

      }
      e.preventDefault();
  }

  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class="jumbotron">
            <h2>Submit your own Testimonial!</h2>
            <br />
              <form onSubmit={this.addItem}>
                <div class="form-group">
                  <label for="usr">Name</label>
                  <input ref={(a) => this._InputName = a } type="text" class="form-control" id="usr" />
                </div>
                <div class="form-group">
                  <label for="title">Title</label>
                  <input ref={(a) => this._InputTitle = a } type="text" class="form-control" id="title" />
                </div>
                <div class="form-group">
                  <label for="comment">Testimonial</label>
                  <textarea ref={(a) => this._InputContent = a } class="form-control" rows="5" id="comment"></textarea>
                </div>
                <button type="submit" class="btn btn-primary LoginPageElement LoginPageButton">Submit</button>
              </form>
            </div>
        </div>
    )
  }
}

export default TestimonialSubmit;