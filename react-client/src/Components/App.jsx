import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import Testimonials from './Testimonials';
import Products from './Products';
import AboutUs from './AboutUs';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import Orders from './Order';
import AddProducts from './AddProducts';

class App extends Component {

  constructor(props) {
    super(props);
    if(localStorage["LoggedIn"]=="true") {
      console.log("This is so true!")
      {/*document.getElementById("navbar_login").textContent= "";*/}
    }
  }

  render() {
    return (
      <div>
      <NavBar />
      <Router>
        <div>
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="testimonials" exact path="/testimonials" component={Testimonials} />
          <Route name="products" exact path="/products" component={Products} />
          <Route name="aboutus" exact path="/aboutus" component={AboutUs} />
          <Route name="loginpage" exact path="/loginpage" component={LoginPage} />
          <Route name="signuppage" exact path="/signuppage" component={SignUpPage} />
          <Route name="orderpage" exact path="/orders" component={Orders} />
          <Route name="addproducts" exact path="/addproducts" component={AddProducts} />
        </div>
      </Router>
      <Footer />
      </div>
    )
  }
}



export default App;