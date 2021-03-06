import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class ProductDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount(){
        this.getSingleProduct();
    }

    getSingleProduct(){
        let productID = this.props.match.params.id;
        console.log(this.props.match.params);
        axios.get(`http://localhost:3001/products/${productID}`)
        .then(response=> {
          this.setState({details: response.data}, () => {
            console.log(this.state);
          })
        })
        .catch(err => console.log(err))
    }

    onDelete(){
        let productId = this.props.match.params.id;
        axios.delete(`http://localhost:3001/products/${productId}`)
        .then(resolve => {
            this.props.history.push('/products')
        }).catch(err => console.log(err))
    }

    render(){ 
        return(
            <div>
                <br />
                <Link to='/products'>Back</Link>
               <h1>{this.state.details.name}</h1>
               <ul>
               <li>Description: {this.state.details.description}</li>
               <li>Price: {this.state.details.price}</li>
               </ul>
                <Link to={`/product/edit/${this.state.details.id}`}>Edit Product</Link>
                <Button onClick={this.onDelete.bind(this)}>Delete Product</Button>

            </div>
        )
    }
}

export default ProductDetail;