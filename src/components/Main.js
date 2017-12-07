import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from '../containers/SplashPage';
import ProductCatalog from '../containers/ProductCatalog';
import Locations from '../containers/Locations';
import Login from '../containers/Login';

const Main = () => (
    <main>
        <Switch>
        <Route exact path='/' component={SplashPage} />
        <Route exact path='/locations' component={Locations} />
        <Route exact path='/products' component={ProductCatalog} />
        <Route exact path='/login' component={Login} />
        </Switch>
    </main>
)

export default Main;