import React, { Component } from 'react';
class LoginBox extends Component {
  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class="jumbotron">
            <h1>WebZo Login</h1>
            <form>
                <div class="input-group LoginPageElement">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input id="email" type="text" class="form-control" name="email" placeholder="Email" />
                </div>
                <div class="input-group LoginPageElement">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input id="password" type="password" class="form-control" name="password" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary LoginPageElement LoginPageButton">Log In</button>
            </form>
            </div>
        </div>
    )
  }
}

export default LoginBox;