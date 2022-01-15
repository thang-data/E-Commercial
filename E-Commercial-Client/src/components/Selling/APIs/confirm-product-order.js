import axios from 'axios';
import { axiosConfig } from '../../../App';

export const confirmProductOrder = (callThis, orderId) => {
    callThis.setState({ showLoadingState: true });

    axios.get('http://localhost:5000/order/confirm/?order=' + orderId, axiosConfig)
    .then(res => {
        if(res) {
            callThis.setState({ showLoadingState: false });
        }
        if(res.data.protect === 'miss' || res.data.order === 'confirm order: order is not existed') {
            alert('There are problems. Sign in again, please !');

            callThis.props.history.push('/authentication'); return;                        
        }
        if(res.data.order === 'confirm order: success') {
            alert('confirm order success !');

            window.location.reload(); return
        }
    })
}