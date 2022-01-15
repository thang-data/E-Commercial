import axios from 'axios';
import { axiosConfig } from '../../../App';

export const cancelOrder = (callThis, accountId, orderId) => {
    axios.get('http://localhost:5000/order/cancel/?account=' + accountId + '&order=' + orderId, axiosConfig)
    .then(res => {
        if(res.data.protect === 'miss' || res.data.order === 'cancel order: account is not existed' || res.data.order === 'cancel order: order is not existed') {
            alert('There are problems. Sign in again, please !');

            callThis.props.history.push('/authentication'); return;                        
        }
        if(res.data.order === 'cancel order: success') {
            alert('Cancel order success !');

            window.location.reload(); return;
        }
    });
}