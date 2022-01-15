import axios from 'axios';
import { axiosConfig } from '../../../App';
import { sellValidate } from '../Modules/sell-validate';
import { arrayUploadFirebase } from '../../../modules/firebase/upload';

export const postProductDetail = (callThis, event, storeId) => {
    event.preventDefault();
    
    const validator = sellValidate(callThis);

    if(validator === 'success') {
        callThis.setState({ showLoadingState: true });

        const date = new Date();
        const month = date.getMonth() + 1;
        const now = date.getFullYear() + '-' + month + '-' + date.getDate() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        const address = [callThis.state.countryInput, callThis.state.cityInput, callThis.state.addressInput];

        const post = () => {
            const postData = {
                postTime: now,
                productName: callThis.state.productNameInput,
                productCategory: callThis.state.productCategory,
                productFile: callThis.state.productFileUrl,
                productOption: callThis.state.productOption,
                productPrice: callThis.state.productPriceInput,
                productQuantity: callThis.state.productQuantityInput,
                productDescription: callThis.state.productDescriptionInput,
                productAddress: address,
            }

            axios.post('http://localhost:5000/product/detail/post/?store=' + storeId, postData, axiosConfig)
            .then(res => {
                if(res) {
                    callThis.setState({ showLoadingState: false });
                }
                if(res.data.protect === 'miss' || res.data.product === 'post product detail: store is not existed') {
                    alert('There are problems. Sign in again, please !');

                    callThis.props.history.push('/authentication'); return;                        
                }
                if(res.data.product === 'post product detail: success') {
                    alert('Post product detail success !');
                    
                    window.location.reload(); return;                                                
                }
            });
        }

        if(callThis.state.productImageUpload.length > 0 || callThis.state.productVideoUpload.length > 0) {
            const storageRef = 'store/';
            const storageChild = storeId + '/product/date/' + now + '/' + callThis.state.productNameInput + '/file/';

            const productFileUpload = callThis.state.productImageUpload.concat(callThis.state.productVideoUpload);

            arrayUploadFirebase(callThis, storageRef, storageChild, productFileUpload, 'productFileUrl', post);               
        }
        else {
            post();
        }
    }    
}