import React, { Component } from 'react';
class Carousel extends Component {
  render() {
    return (
        <div id="video-carousel-example2" class="carousel slide carousel-fade" data-ride="carousel">
          {/*<!--Indicators-->*/}
          <ol class="carousel-indicators">
            <li data-target="#video-carousel-example2" data-slide-to="0" class="active"></li>
            <li data-target="#video-carousel-example2" data-slide-to="1"></li>
            <li data-target="#video-carousel-example2" data-slide-to="2"></li>
          </ol>
          {/*<!--/.Indicators-->*/}
          {/*<!--Slides-->*/}
          <div class="carousel-inner" role="listbox">
            {/*<!-- First slide -->*/}
            <div class="carousel-item active">
              {/*<!--Mask color-->*/}
              <div class="view">
                {/*<!--Video source-->*/}
                <video class="video-fluid" autoplay loop muted>
                  <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
                </video>
                <div class="mask rgba-indigo-light"></div>
              </div>
        
              {/*<!--Caption-->*/}
              <div class="carousel-caption">
                <div class="animated fadeInDown">
                  <h3 class="h3-responsive">Light mask</h3>
                </div>
              </div>
              {/*<!--Caption-->*/}
            </div>
            {/*<!-- /.First slide -->*/}
        
            {/*<!-- Second slide -->*/}
            <div class="carousel-item">
              {/*<!--Mask color-->*/}
              <div class="view">
                {/*<!--Video source-->*/}
                <video class="video-fluid" autoplay loop muted>
                  <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4" />
                </video>
                <div class="mask rgba-purple-slight"></div>
              </div>
        
              {/*<!--Caption-->*/}
              <div class="carousel-caption">
                <div class="animated fadeInDown">
                  <h3 class="h3-responsive">Super light mask</h3>
                </div>
              </div>
              {/*<!--Caption-->*/}
            </div>
            {/*<!-- /.Second slide -->*/}
        
            {/*<!-- Third slide -->*/}
            <div class="carousel-item">
              {/*<!--Mask color-->*/}
              <div class="view">
                {/*<!--Video source-->*/}
                <video class="video-fluid" autoplay loop muted>
                  <source src="https://mdbootstrap.com/img/video/cube.mp4" type="video/mp4" />
                </video>
                <div class="mask rgba-black-strong"></div>
              </div>
        
              {/*<!--Caption-->*/}
              <div class="carousel-caption">
                <div class="animated fadeInDown">
                  <h3 class="h3-responsive">Strong mask</h3>
                </div>
              </div>
              {/*<!--Caption-->*/}
            </div>
            {/*<!-- /.Third slide -->*/}
          </div>
          {/*<!--/.Slides-->*/}
          {/*<!--Controls-->*/}
          <a class="carousel-control-prev" href="#video-carousel-example2" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#video-carousel-example2" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          {/*<!--/.Controls-->*/}
        </div>
    )
  }
}

export default Carousel;