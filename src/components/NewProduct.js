import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

class AdminNewProduct extends Component{

    addProduct(newProduct){
        axios.request({
            method:'post',
            url:'http://localhost:3001/products',
            data:newProduct
        }).then(response => {
            this.props.history.push('/products');
        }).catch(err => console.log(err)  )
    }

    onSubmit(e){
        const newProduct = {
            name: this.refs.name.value,
            description: this.refs.description.value,
            price: this.refs.price.value
            
        }
        this.addProduct(newProduct);
        e.preventDefault();
    }

    render(){
        return(
            <div>
            <br />
                <Link to='/products'>Back</Link>
                <h1>Add New Product</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="description" ref="description" />
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="price" ref="price" />
                        <label htmlFor="description">Price</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}

export default AdminNewProduct;