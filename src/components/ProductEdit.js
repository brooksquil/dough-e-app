import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

class ProductEdit extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            quantity_type_id: '',
            product_type_id: '',
        }
    }

    getSingleProductDetails(){
        let productID = this.props.match.params.id;
        console.log(this.props.match.params);
        axios.get(`http://localhost:3001/products/${productID}`)
        .then(response=> {
            this.setState({
                id: response.data.id,
                name: response.data.name,
                description: response.data.description,
                price: response.data.price,
                quantity_type_id: response.data.quantity_type_id,
                product_type_id: response.data.product_type_id
                
          }, () => {
              console.log(this.state);
          });
        })
        .catch(err => console.log(err))
    }

    
    componentWillMount () {
        this.getSingleProductDetails() ;
    }
    
    editProduct(product){
        axios.request({
        method:'put',
        url:`http://localhost:3001/products/${this.state.id}`,
        data:product
    }).then(response => {
        this.props.history.push('/products');
    }).catch(err => console.log(err)  )
}

    onSubmit(e){
        const product = {
            name: this.refs.name.value,
            description: this.refs.description.value,
            price: this.refs.price.value
        }
        this.editProduct(product);
        e.preventDefault();
    }
 
    handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
    }

    render(){
        return(
            <div>
            <br />
                <Link to='/products'>Back</Link>
                <h1>Edit Product</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" ref="description" value={this.state.description} onChange={this.handleInputChange.bind(this)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Price</label>
                        <input type="text" name="price" ref="price" value={this.state.price}  onChange={this.handleInputChange.bind(this)} />
                    </div>
                    <input type="submit" value="Edit Product" className="btn" />
                </form>
            </div>
        )
    }
}

export default ProductEdit;