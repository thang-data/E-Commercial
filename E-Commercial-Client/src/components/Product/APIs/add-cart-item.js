import axios from 'axios';
import { axiosConfig } from '../../../App';

export const addCartItem = (callThis) => {
    axios.get('http://localhost:5000/cart/item/add/?account=' + callThis.props.accountInfo._id + '&product=' + callThis.state.productDetail._id, axiosConfig)
    .then(res => {
        if(res.data.protect === 'miss' || res.data.cart === 'add cart item: account is not existed' || res.data.cart === 'add cart item: product is not existed') {
            alert('There are problems. Sign in again, please !');
            
            callThis.props.history.push('/authentication'); return;
        }
        if(res.data.cart === 'add cart item: existed item') {
            alert('This item is in cart, now'); return;
        }
        if(res.data.cart === 'add cart item: success') {
            alert('Add item to cart success !');

            callThis.props.history.push('/cart/manage/of/' + callThis.props.accountInfo._id);
                
            window.location.reload(); return; 
        }
    });
}