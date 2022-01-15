import axios from 'axios';
import { axiosConfig } from '../../../App';

export const loadProductListOnCategory = (callThis, productCategory) => {
    axios.get('http://localhost:5000/product/list/category/load/?category=' + productCategory, axiosConfig)
    .then(res => {
        if(res.data.product.message === 'success') {
            callThis.setState({ productList: res.data.product.result, resultOf: productCategory }); return;
        }        
    });
}