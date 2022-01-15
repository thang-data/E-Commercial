import axios from 'axios';
import { axiosConfig } from '../../../App';

export const deleteProduct = (callThis, storeId, productId) => {
    callThis.setState({ showLoadingState: true });

    axios.get('http://localhost:5000/product/manage/delete/?store=' + storeId + '&product=' + productId, axiosConfig)
    .then(res => {
        if(res) {
            callThis.setState({ showLoadingState: false });
        }
        if(res.data.protect === 'miss' || res.data.product === 'delete product: product is not existed' || res.data.product === 'delete product: store is not existed') {
            alert('There are problems. Sign in again, please !');

            callThis.props.history.push('/authentication'); return;
        }
        if(res.data.product === 'delete product: success') {
            alert('Delete product success !');
                        
            window.location.reload(); return;
        }
    });    
}