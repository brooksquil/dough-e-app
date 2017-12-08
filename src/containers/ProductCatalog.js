import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';

class ProductCatalog extends Component {
  constructor(){
      super();
      this.state= {
        products: []
      }
    }

  componentWillMount(){
    this.getProducts()
  }

  getProducts(){
    axios.get('http://localhost:3001/products')
    .then(response=> {
      this.setState({products: response.data}, () => {
        // console.log(this.state);
      })
    })
    .catch(err => console.log(err))
  }


    render() {
      const productItems = this.state.products.map((product, i) => {
        return(
         
          <ProductItem key={product.id} item={product}/>
        
        )
      })

      return (
        <div>
        <div className="container">
            <h1>Product Catalog</h1>
            <ul>
              {productItems}
            </ul>
            <div>
            <Link to={`/newproduct`}>Add Product</Link>
            </div>
        </div>
        </div>
      ); 
    }
  }
  
  export default ProductCatalog;