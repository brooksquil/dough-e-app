import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class OrderDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount(){
        this.getSingleOrder();
    }

    getSingleOrder(){
        let orderID = this.props.match.params.id;
        console.log(this.props.match.params);
        axios.get(`http://localhost:3001/orders/${orderID}`)
        .then(response=> {
          this.setState({details: response.data}, () => {
            console.log(this.state);
          })
        })
        .catch(err => console.log(err))
    }

    onDelete(){
        let orderId = this.props.match.params.id;
        axios.delete(`http://localhost:3001/orders/${orderId}`)
        .then(resolve => {
            this.props.history.push('/orders')
        }).catch(err => console.log(err))
    }

    render(){ 
        return(
            <div>
                <br />
                <Link to='/orders'>Back</Link>
               <h1>{this.state.details.name}</h1>
               <ul>
               <li>Delivery Date: {this.state.details.delivery_date}</li>
               {/* <li>Price: {this.state.details.price}</li> */}
               </ul>
                <Link to={`/order/edit/${this.state.details.id}`}>Edit Order</Link>
                <Button onClick={this.onDelete.bind(this)}>Delete Order</Button>

            </div>
        )
    }
}

export default OrderDetail;