import React, { Fragment } from 'react';
import './App.css';
import './style/Sign.css';
import './style/Manager.css';
import './style/Order.css';
import { connect } from 'react-redux';
import { checkConnection } from './connection/check-connection';
import { loadAccountManageInfo } from './connection/load-account-manage-info';
import { loadStoreManageInfo } from './connection/load-store-manage-info';
import { loadSellingManageProductList } from './connection/load-selling-manage-product-list';
import { loadCartItem } from './connection/load-cart-item';
import { loadOrderList } from './connection/load-order-list';
import Context from './components/Context/Context';

export const axiosConfig = {
    headers: {                
      "Content-Type": "application/json; charset=UTF-8",                                                   
    },
    withCredentials: true
}

class App extends React.Component {
    
    componentDidMount() {
        checkConnection(this);
        loadAccountManageInfo(this);
        loadStoreManageInfo(this);
        loadSellingManageProductList(this);
        loadCartItem(this);
        loadOrderList(this);
    }

    render() {        
        return(
            <Fragment>
                <div className='app'>
                    <Context />
                </div>                      
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(App);
