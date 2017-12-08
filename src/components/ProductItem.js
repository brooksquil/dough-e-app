import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render(){
        return(
            <div>
                <li><Link to={`/products/${this.state.item.id}`}>{this.state.item.name}</Link></li>
            </div>
        )
    }
}

export default ProductItem;