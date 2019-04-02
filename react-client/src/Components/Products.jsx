import React, { Component } from 'react';
import Carousel from './CarouselComponent/Carousel';
import NavBar from './HeaderComponent/NavBar';
import FootBar from './FooterComponent/Footer';

class Products extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="Page-Content">
          
          <Carousel />
          
        </div>
        <FootBar />
      </div>
    )
  }
}

export default Products;