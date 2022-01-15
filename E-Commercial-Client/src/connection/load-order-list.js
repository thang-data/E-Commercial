import axios from 'axios';
import Cookies from 'js-cookie';
import { axiosConfig } from '../App';

export const loadOrderList = (callThis) => {
    if(Cookies.get('account')) {
        axios.get('http://localhost:5000/order/list/load/?account=' + Cookies.get('account'), axiosConfig)
        .then(res => {
            if(res.data.order.message === 'load order list: empty') {
                callThis.props.dispatch({ type: 'UPDATE_ORDER_LIST', payload: 'empty' }); return;
            }                                   
            if(res.data.order.message === 'load order list: success') {
                callThis.props.dispatch({ type: 'UPDATE_ORDER_LIST', payload: res.data.order.result }); return;
            }
        });
    }
    else {
        return;
    }
}