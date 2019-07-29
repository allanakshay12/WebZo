import React, { Component } from 'react';
class OrderBox extends Component {

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
        if(this._InputAddress.value !== "") {
          var newItem = {
            transaction_id: Math.random(),
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            contact: localStorage.getItem("contact_no"),
            model_no: localStorage.getItem("model_no"),
            address: this._InputAddress.value,
            key: Date.now()
          };
  
          fetch(`http://localhost:8080/orders/add?transaction_id=${newItem.transaction_id}&contact_no=${newItem.contact}&address=${newItem.address}&model_no=${newItem.model_no}`);
  
          this.setState ( (prevState) => { return { items: prevState.items.concat(newItem) } } );
          
          this._InputAddress.value = "";
          console.log(this.state.items);
         
          window.location.replace('http://localhost:8080/');
        }
        e.preventDefault();
    }

  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class="jumbotron">
            <h2>Order Details</h2>
            <br />
            <h4>Name : {localStorage["model_name"]}</h4>
            <br />
            <h4>Description : {localStorage["description"]}</h4>
            <br />
            <h4>Price / Hour : {localStorage["price"]}</h4>
            <br />
            <br />
              <form onSubmit={this.addItem}>
                <img id="order_image" src={localStorage["picture"]} width="100%" />
                <br />
                <br />
                <div class="form-group">
                  <label for="address">Address</label>
                  <textarea ref={(a) => this._InputAddress = a } class="form-control" rows="5" id="address"></textarea>
                </div>
                <button type="submit" class="btn btn-primary LoginPageElement LoginPageButton">Place Order</button>
              </form>
            </div>
        </div>
    )
  }
}

export default OrderBox;