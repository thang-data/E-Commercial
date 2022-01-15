import axios from 'axios';
import { axiosConfig } from '../../../App';
import { orderValidate } from '../Modules/order-validate';

export const postOrderDetail = (callThis, event, accountId, productId, productOption) => {
    event.preventDefault();

    const validator = orderValidate(callThis, productOption);

    if(validator === 'success') {
        callThis.setState({ showLoadingState: true });

        const date = new Date();
        const month = date.getMonth() + 1;
        const now = date.getFullYear() + '-' + month + '-' + date.getDate() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        const postData = {
            orderTime: now,
            orderName: callThis.state.nameInput,
            orderPhone: callThis.state.phoneInput,
            orderAddress: [callThis.state.countryInput, callThis.state.cityInput, callThis.state.addressInput],
            orderOption: callThis.state.optionInput,
            orderQuantity: callThis.state.quantityInput,
            orderPrice: [callThis.state.productCost, callThis.state.shippingCost]
        }

        axios.post('http://localhost:5000/order/detail/post/?account=' + accountId + '&product=' + productId, postData, axiosConfig)
        .then(res => {
            if(res) {
                callThis.setState({ showLoadingState: false });
            }
            if(res.data.protect === 'miss' || res.data.order === 'post order detail: account is not existed' || res.data.order === 'post order detail: product is not existed') {
                alert('There are problems. Sign in again, please !');

                callThis.props.history.push('/authentication'); return;
            }
            if(res.data.order === 'post order detail: success') {
                alert('Order success');

                callThis.props.history.push('/account/manage/' + accountId);

                window.location.reload(); return;
            }
        });
    }
}