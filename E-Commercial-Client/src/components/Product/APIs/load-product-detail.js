import axios from 'axios';
import { axiosConfig } from '../../../App';

export const loadProductDetail = (callThis, productId) => {
    axios.get('http://localhost:5000/product/detail/load/?product=' + productId, axiosConfig)
    .then(res => {
        if(res.data.product === 'load product detail: empty list') {
            alert('Product is not existed. Try others, please !');

            callThis.props.history.push('/'); return;
        }
        if(res.data.product.message === 'load product detail: success') {      
            callThis.setState({
                productStore: res.data.product.store,
                productDetail: res.data.product.detail,                                 
                productCommentList: res.data.product.comment,
                productFileViewType: res.data.product.detail.file[0].type,
                productFileViewUrl: res.data.product.detail.file[0].url,
                renderDetail: true                               
            }); return;            
        }        
    });
}