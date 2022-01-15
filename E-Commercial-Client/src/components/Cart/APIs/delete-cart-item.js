import axios from 'axios';
import { axiosConfig } from '../../../App';

export const deleteCartItem = (callThis, itemId) => {
    axios.get('http://localhost:5000/cart/item/delete/?account=' + callThis.props.accountInfo._id + '&item=' + itemId, axiosConfig)
    .then(res => {                        
        if(res.data.protect === 'miss' || res.data.cart === 'delete cart item: account is not existed') {
            alert('There are problems. Sign in again, please !');

            callThis.props.history.push('/authentication'); return;                        
        }
        if(res.data.cart === 'delete cart item: sucess') {
            alert('Delete item from cart success !');

            window.location.reload(); return;
        }            
    });
}