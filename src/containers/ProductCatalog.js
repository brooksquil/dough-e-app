import React, { Component } from 'react';
import axios from 'axios';
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
  }


    render() {
      const productItems = this.state.products.map((product, i) => {
        return(
          <div>
          <li>{product.name}</li>
          <li>{product.description}</li>
          <li>{product.price}</li>
          </div>
        )
      })

      return (
        <div>
        <div className="container">
            <h1>Product Catalog</h1>
            <ul>
              {productItems}
            </ul>
            
        </div>
        </div>
      ); 
    }
  }
  
  export default ProductCatalog;