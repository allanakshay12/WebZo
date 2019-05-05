import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import Testimonials from './Testimonials';
import Products from './Products';
import AboutUs from './AboutUs';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="testimonials" exact path="/testimonials" component={Testimonials} />
          <Route name="products" exact path="/products" component={Products} />
          <Route name="aboutus" exact path="/aboutus" component={AboutUs} />
          <Route name="loginpage" exact path="/loginpage" component={LoginPage} />
          <Route name="signuppage" exact path="/signuppage" component={SignUpPage} />
        </div>
      </Router>
    )
  }
}



export default App;