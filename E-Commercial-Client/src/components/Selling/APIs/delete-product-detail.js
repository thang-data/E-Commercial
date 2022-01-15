import axios from 'axios';
import { axiosConfig } from '../../../App';

export const deleteProductDetail = (callThis, productId, field, where) => {
    axios.get('http://localhost:5000/product/manage/detail/delete/?product=' + productId + '&field=' + field + '&where=' + where, axiosConfig)
    .then(res => {
        if(res.data.protect === 'miss' || res.data.product === 'delete product detail: product is not existed') {
            alert('There are problems. Sign in again, please !');

            callThis.props.history.push('/authentication'); return;                        
        }
        if(res.data.product === 'delete product detail: success') {
            alert('Delete product detail success !');
            
            window.location.reload(); return;                                                
        }
    });    
}