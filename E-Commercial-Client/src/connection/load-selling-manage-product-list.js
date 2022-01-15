import axios from 'axios';
import Cookies from 'js-cookie';
import { axiosConfig } from '../App';

export const loadSellingManageProductList = (callThis) => {        
    if(Cookies.get('store')) {                
        axios.get('http://localhost:5000/selling/manage/product/list/load/?store=' + Cookies.get('store'), axiosConfig)
        .then(res => {
            if(res.data.protect === 'miss' || res.data.product === 'load selling manage product list: store is not existed') {
                return;                        
            }
            if(res.data.product.message === 'load selling manage product list: success') {
                callThis.props.dispatch({ type: 'UPDATE_SELLING_LIST', payload: res.data.product.result }); return;
            }
        });
    }
    else {
        return;
    }
}