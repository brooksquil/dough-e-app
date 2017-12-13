import React, { Component } from 'react';
import axios from 'axios';
import OrderItem from '../components/OrderItem';
import { Link } from 'react-router-dom';

class OrderContainer extends Component {
  constructor(){
      super();
      this.state= {
        orders: []
      }
    }

  componentWillMount(){
    this.getOrders()
  }

  getOrders(){
    axios.get('http://localhost:3001/orders')
    .then(response=> {
      this.setState({orders: response.data}, () => {
        // console.log(this.state);
      })
    })
    .catch(err => console.log(err))
  }


    render() {
      const orderItems = this.state.orders.map((order, i) => {
        return(
         
          <OrderItem key={order.id} item={order} />
        
        )
      })

      return (
        <div>
        <Link to='/adminmenu'>Back</Link>
        <div className="container">
            <h1>Orders</h1>
            <ul>
              {orderItems}
            </ul>
            <div>
            <Link to={`/neworder`}>New Order</Link>
            </div>
        </div>
        </div>
      ); 
    }
  }
  
  export default OrderContainer;