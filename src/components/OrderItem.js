import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OrderItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render(){
        return(
            <div>
                <li><Link to={`/orders/${this.state.item.id}`}>{this.state.item.name}</Link></li>
            </div>
        )
    }
}

export default OrderItem;