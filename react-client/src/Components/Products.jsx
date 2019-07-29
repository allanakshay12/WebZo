import React, { Component } from 'react';
import Carousel from './CarouselComponent/Carousel';
import NavBar from './HeaderComponent/NavBar';
import FootBar from './FooterComponent/Footer';
import ProductList from './ProductsComponent/ProductList';

class Products extends Component {

  constructor(props)
    {
      super(props);
  
      this.state = {
        items: []
      };
      
      var newitem = [];
      fetch(`http://localhost:8080/products/get`)
      .then(res => res.json())
      .then(data => newitem = data)
      .then( () => this.setState ( (prevState) => { return { items: prevState.items.concat(newitem) } } ))
      .then( () => console.log(this.state.items));

      
  
    }

   

  render() {
    return (
      <div>
        
        <div className="Page-Content">
          
          <Carousel />

          <br />

          <div class="container"> 
            <h2>Choose from the wide array of selections!</h2>
            <br />
          </div>
          
          <ProductList entries={this.state.items}/>

          <br />
          <br />
          <div class = "container">
            <h2 id='loginpagesignupoption'>Click <a href='/addproducts' id='loginpagesignupanchor'>here</a> to add more products.</h2>
          </div>
        </div>
      
      </div>
    )
  }
}

export default Products;