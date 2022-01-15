import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Authentication from '../Authentication/Authentication';
import Searching from '../Searching/Searching';
import Home from '../Home/Home';
import Selling from '../Selling/Selling';
import Store from '../Store/Store';
import Product from '../Product/Product';
import Shopping from '../Shopping/Shopping';
import Cart from '../Cart/Cart';
import Account from '../Account/Account';
import Footer from '../Footer/Footer';

class Routes extends React.Component {    
    render() {        
        return(
            <Fragment>                
                <BrowserRouter>
                    <Searching />                    
                    <Header />
                    <Route exact path = '/register'>
                        <Register />
                    </Route>
                    <Route exact path = '/authentication'>
                        <Authentication />
                    </Route>
                    <Route exact path = '/'>
                        <Home />
                    </Route>
                    <Route exact path = { ['/sell', '/sell/', '/sell/from/store', '/sell/from/store/', '/sell/from/store/:id'] }>
                        <Selling />
                    </Route>
                    <Route exact path = { ['/account', '/account/', '/account/manage', '/account/manage/', '/account/manage/:id'] }>
                        <Account />
                    </Route>
                    <Route exact path = { ['/store', '/store/', '/store/manage', '/store/manage/', '/store/manage/:id'] }>
                        <Store />
                    </Route>                     
                    <Route exact path = { ['/cart', '/cart/', '/cart/manage', '/cart/manage/', '/cart/manage/of', '/cart/manage/of/', '/cart/manage/of/:id'] }>
                        <Cart />
                    </Route>
                    <Route exact path={ ['/shopping/load/category/:category', '/shopping/load/name/:name'] }>
                        <Shopping />
                    </Route>
                    <Route exact path = { '/product/detail/view/:id' }>
                        <Product />
                    </Route>                                                                             
                    <Footer />
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default Routes;