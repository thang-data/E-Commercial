import axios from 'axios';
import { axiosConfig } from '../../../App';

export const loadProductListOnName = (callThis, productName) => {
    const postData = {
        productName: productName
    }

    axios.post('http://localhost:5000/product/list/name/load/', postData, axiosConfig)
    .then(res => {
        if(res.data.product.message === 'success') {
            callThis.setState({ productList: res.data.product.result, resultOf: productName }); return;
        }        
    });
}