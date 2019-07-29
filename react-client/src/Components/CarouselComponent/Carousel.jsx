import React, { Component } from 'react';
import ProductCarousel1 from '../../assets/images/ProductCarousel1.jpg';
import ProductCarousel2 from '../../assets/images/ProductCarousel2.png';
import ProductCarousel3 from '../../assets/images/ProductCarousel3.png';
class Carousel extends Component {
  render() {
    return (
      <div class="container CarouselContainer">
        <h2>Our Product Highlights</h2>
        <br />
        <div id="myCarousel" class="carousel slide ProductCarousel" data-ride="carousel">
          {/*<!-- Indicators -->*/}
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
          {/*<!-- Wrapper for slides -->*/}
          <div class="carousel-inner ProductCarousel">
      
            <div class="item active">
              <img src={ProductCarousel1} alt="Los Angeles" class="ProductCarouselImage" height = "100px"/>
              <div class="carousel-caption">
                <h3>Hercules Roadeo</h3>
                <p>Find the youth within you!!</p>
              </div>
            </div>
      
            <div class="item">
              <img src={ProductCarousel2} alt="Chicago" class="ProductCarouselImage"/>
              <div class="carousel-caption">
                <h3>BTwin Riverside</h3>
                <p>For a Comfortable Ride!</p>
              </div>
            </div>
          
            <div class="item">
              <img src={ProductCarousel3} alt="New York" class="ProductCarouselImage"/>
              <div class="carousel-caption">
                <h3>Montra MadRock</h3>
                <p>Rock the World!</p>
              </div>
            </div>
        
          </div>
      
          {/*<!-- Left and right controls -->*/}
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
   
      
    )
  }
}

export default Carousel;