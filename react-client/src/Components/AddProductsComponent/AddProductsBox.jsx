import React, { Component } from 'react';
class AddProductsBox extends Component {

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
        if(this._InputName.value !== "" && this._InputNumber.value !== "" && this._InputQty.value !== "" && this._InputDesc.value!=="" && this._InputPic.value!="" && this._InputPrice.value !== "") {
          var newItem = {
            model_name: this._InputName.value,
            model_no:  this._InputNumber.value,
            qty:  this._InputQty.value,
            description:  this._InputDesc.value,
            picture:  this._InputPic.value,
            price:  this._InputPrice.value,
            key: Date.now()
          };
  
          fetch(`http://localhost:8080/addproductstuff/add?model_name=${newItem.model_name}&model_no=${newItem.model_no}&qty=${newItem.qty}&description=${newItem.description}&price=${newItem.price}&picture=${newItem.picture}`);
          
         
          this.setState ( (prevState) => { return { items: prevState.items.concat(newItem) } } );
          
          this._InputName.value = "";
          this._InputNumber.value = "";
          this._InputQty.value = "";
          this._InputDesc.value = "";
          this._InputPic.value = "";
          this._InputPrice.value = "";
          console.log(this.state.items);
          
        }
        e.preventDefault();
    }

  render() {
    return (
        <div class="container" id="LoginPageJumbotron">
            <div class="jumbotron">
            <h2>Add Products!</h2>
            <br />
              <form onSubmit={this.addItem}>
                <div class="form-group">
                  <label for="usr">Model Name</label>
                  <input ref={(a) => this._InputName = a } type="text" class="form-control" id="usr" />
                </div>
                <div class="form-group">
                  <label for="email">Model Number</label>
                  <input ref={(a) => this._InputNumber = a } type="text" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="password">Quantity</label>
                  <input ref={(a) => this._InputQty = a } type="number" class="form-control" id="password" />
                </div>
                <div class="form-group">
                  <label for="confirm_password">Description</label>
                  <input ref={(a) => this._InputDesc = a } type="text" class="form-control" id="confirm_pasword" />
                </div>
                <div class="form-group">
                  <label for="contact">Price / Hour</label>
                  <input ref={(a) => this._InputPrice = a } type="number" class="form-control" id="contact" />
                </div>
                <div class="form-group">
                  <label for="pic">Picture URL</label>
                  <input ref={(a) => this._InputPic = a } type="text" class="form-control" id="pic" />
                </div>
                <button type="submit" class="btn btn-primary LoginPageElement LoginPageButton">Add</button>
              </form>
            </div>
        </div>
    )
  }
}

export default AddProductsBox;