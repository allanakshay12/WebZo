import React, { Component } from 'react';
class SignUpBox extends Component {

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
        if(this._InputName.value !== "" && this._InputEmail.value !== "" && this._InputContact.value !== "" && this._InputConfPassword.value!=="" && this._InputPassword.value!="" && this._InputPassword.value == this._InputConfPassword.value) {
          var newItem = {
            name: this._InputName.value,
            email: this._InputEmail.value,
            password: this._InputPassword.value,
            contact: this._InputContact.value,
            key: Date.now()
          };
  
          fetch(`http://localhost:8080/signuppage/add?email=${newItem.email}&password=${newItem.password}&name=${newItem.name}&contact_no=${newItem.contact}`);
  
          this.setState ( (prevState) => { return { items: prevState.items.concat(newItem) } } );
          
          this._InputName.value = "";
          this._InputEmail.value = "";
          this._InputContact.value = "";
          this._InputPassword.value = "";
          this._InputConfPassword.value = "";
          console.log(this.state.items);
          window.location.replace('http://localhost:8080/loginpage');
  
        }
        e.preventDefault();
    }

  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class="jumbotron">
            <h2>Sign Up to WebZo!</h2>
            <br />
              <form onSubmit={this.addItem}>
                <div class="form-group">
                  <label for="usr">Name</label>
                  <input ref={(a) => this._InputName = a } type="text" class="form-control" id="usr" />
                </div>
                <div class="form-group">
                  <label for="email">E-Mail ID</label>
                  <input ref={(a) => this._InputEmail = a } type="text" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input ref={(a) => this._InputPassword = a } type="password" class="form-control" id="password" />
                </div>
                <div class="form-group">
                  <label for="confirm_password">Confirm Password</label>
                  <input ref={(a) => this._InputConfPassword = a } type="password" class="form-control" id="confirm_pasword" />
                </div>
                <div class="form-group">
                  <label for="contact">Contact Number</label>
                  <input ref={(a) => this._InputContact = a } type="number" class="form-control" id="contact" />
                </div>
                <button type="submit" class="btn btn-primary LoginPageElement LoginPageButton">Sign Up</button>
              </form>
            </div>
        </div>
    )
  }
}

export default SignUpBox;