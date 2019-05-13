import React, { Component } from 'react';
class LoginBox extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      items: []
    };
    
    var newitem = [];
    fetch(`http://localhost:8080/loginpage/get`)
    .then(res => res.json())
    .then(data => newitem = data)
    .then( () => this.setState ( (prevState) => { return { items: prevState.items.concat(newitem) } } ))
    .then( () => console.log(this.state.items));

    this.Authenticate = this.Authenticate.bind(this);

  }

  Authenticate(e)
  {

    var tempuser = {
      email: this._InputEmail.value,
      password: this._InputPwd.value,
    };

    var i, flag=0; /* flag - 0, not found | flag - 1, found*/
    for(i = 0; i<this.state.items.length; i++) {
      if((this.state.items[i].email == tempuser.email) && (this.state.items[i].password == tempuser.password)) {
        flag = 1;
      }
    } 
    if(flag==0) {
      window.location.replace('http://localhost:8080/signuppage');
    } else {
      window.location.replace('http://localhost:8080/');
    }

    e.preventDefault();
  }

  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class="jumbotron">
            <h1>WebZo Login</h1>
            <form onSubmit={this.Authenticate}>
                <div class="input-group LoginPageElement">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input ref={(a) => this._InputEmail = a } id="email" type="text" class="form-control" name="email" placeholder="Email" />
                </div>
                <div class="input-group LoginPageElement">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input ref={(a) => this._InputPwd = a } id="password" type="password" class="form-control" name="password" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary LoginPageElement LoginPageButton">Log In</button>
            </form>
            <p id='loginpagesignupoption'>Haven't Created an Account yet? <a href='/signuppage' id='loginpagesignupanchor'>Sign up</a> Instead!</p>
            </div>
        </div>
    )
  }
}

export default LoginBox;