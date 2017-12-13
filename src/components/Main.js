import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from '../containers/SplashPage';
import ProductCatalog from '../containers/ProductCatalog';
import ProductDetail from './ProductDetail';
import OrderDetail from './OrderDetail';
import Locations from '../containers/Locations';
import Login from '../containers/Login';
import OrderContainer from '../containers/OrderContainer';
import AdminMenu from '../containers/AdminViews/AdminMenu';
import NewProduct from './NewProduct';
import ProductEdit from './ProductEdit';

const Main = () => (
    <main>
        <Switch>
        <Route exact path='/' component={SplashPage} />
        <Route exact path='/locations' component={Locations} />
        <Route exact path='/products' component={ProductCatalog} />
        <Route exact path='/orders' component={OrderContainer} />
        <Route exact path='/newproduct' component={NewProduct} />
        <Route exact path='/product/edit/:id' component={ProductEdit} />
        <Route exact path='/products/:id' component={ProductDetail} />
        <Route exact path='/orders/:id' component={OrderDetail} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/adminmenu' component={AdminMenu} />
        </Switch>
    </main>
)

export default Main;