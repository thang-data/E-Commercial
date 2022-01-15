import axios from 'axios';
import Cookies from 'js-cookie';
import { axiosConfig } from '../App';

export const loadCartItem = (callThis) => {    
    if(Cookies.get('account')) {        

        axios.get('http://localhost:5000/cart/item/load/?account=' + Cookies.get('account'), axiosConfig)
        .then(res => {
            if(res.data.cart === 'load cart item: empty list') {
                callThis.props.dispatch({ type: 'UPDATE_CART_LIST', payload: 'empty' }); return;
            }                                   
            if(res.data.cart.message === 'load cart item: success') {console.log(res.data.cart.result)
                callThis.props.dispatch({ type: 'UPDATE_CART_LIST', payload: res.data.cart.result }); return;
            }                       
        });        
    }
    else {
        return;
    }        
}