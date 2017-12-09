import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from '../containers/SplashPage';
import ProductCatalog from '../containers/ProductCatalog';
import ProductDetail from './ProductDetail';
import Locations from '../containers/Locations';
import Login from '../containers/Login';
import AdminMenu from '../containers/AdminViews/AdminMenu';
import NewProduct from './NewProduct';
import ProductEdit from './ProductEdit';

const Main = () => (
    <main>
        <Switch>
        <Route exact path='/' component={SplashPage} />
        <Route exact path='/locations' component={Locations} />
        <Route exact path='/products' component={ProductCatalog} />
        <Route exact path='/newproduct' component={NewProduct} />
        <Route exact path='/product/edit/:id' component={ProductEdit} />
        <Route exact path='/products/:id' component={ProductDetail} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/adminmenu' component={AdminMenu} />

        {/* if admin here */}
        </Switch>
    </main>
)

export default Main;