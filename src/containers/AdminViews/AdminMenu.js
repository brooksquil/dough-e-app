import React from 'react';
import { Link } from 'react-router-dom';


const AdminMenu = () => {
        return (
            <div>
            <br />
            <Link to='/'>Back</Link>
            <br />
                <h1>Bakery Administrator Menu</h1>
                <div>
                {/* <Link to={`/neworder`}>New Order</Link> */}
                <br />
                <Link to={`/orders`}>Orders</Link>
                <br />
                {/* <Link to={`/customers`}>Customers</Link> */}
                <Link to={`/products`}>Products</Link>
                <br />
                <Link to={`/newproduct`}>Add Product</Link>
                <br />
                </div>
            </div>
        )
    }

export default AdminMenu;