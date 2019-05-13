import React, {Component} from "react";
import avatar from '../../assets/images/img_avatar1.png';

class TestimonialList extends Component {

    constructor(props) {
        super(props);

        this.CreateProducts = this.CreateProducts.bind(this);
    }

    CreateProducts(item) {
        return <ul class="ProductsListUL" key={item.key} >
            <div class="container" id="LoginPageJumbotron">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3>{item.title}</h3>
                </div>
                <div class="panel-body">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src={avatar} class="media-object TestimonialImage" />
                        </div>
                        <div class="media-body">
                            <h3 class="media-heading">{item.name}</h3>
                            <p>{item.content}</p>
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
            <ul className="TestimonialList">
                {ListItems}
            </ul>
        );
    }
}

export default TestimonialList;