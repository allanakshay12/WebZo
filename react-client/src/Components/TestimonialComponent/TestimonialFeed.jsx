import React, { Component } from 'react';
import TestimonialList from './TestimonialList';
class TestimonialFeed extends Component {

    constructor(props)
    {
      super(props);
  
      this.state = {
        items: []
      };
      
      var newitem = [];
      fetch(`http://localhost:8080/testimonials/get`)
      .then(res => res.json())
      .then(data => newitem = data)
      .then( () => this.setState ( (prevState) => { return { items: prevState.items.concat(newitem) } } ))
      .then( () => console.log(this.state.items));
  
      
  
    }

  render() {

    return (

        <TestimonialList entries={this.state.items}/>

        
    )
  }
}

export default TestimonialFeed;