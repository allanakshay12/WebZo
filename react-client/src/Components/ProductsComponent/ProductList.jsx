import React, {Component} from "react";

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.CreateProducts = this.CreateProducts.bind(this);
    }

    CreateProducts(item) {
        return <ul class="ProductsListUL" key={item.key} onClick={() => window.location.replace(`http://localhost:8080/products/model_no=${item.model_no}&model_name=${item.model_name}&qty=${item.qty}&description=${item.description}&picture=${item.picture}`)}>
            <div class="container" id="LoginPageJumbotron ProductList">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3>{item.model_name}</h3>
                </div>
                <div class="panel-body">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src={item.picture} class="media-object TestimonialImage" />
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">{item.description}</h3>
                            <p>Quantity Remaining : {item.qty}</p>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        </ul>
    }

    render() {
        var ProductEntries = this.props.entries;
        var ListItems = ProductEntries.map(this.CreateProducts);

        return (
            <ul className="ProductList">
                {ListItems}
            </ul>
        );
    }
}

export default ProductList;