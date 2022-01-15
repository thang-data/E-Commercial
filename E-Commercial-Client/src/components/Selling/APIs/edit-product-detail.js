import axios from 'axios';
import { axiosConfig } from '../../../App';
import { editProductValidate } from '../Modules/edit-product-validate';
import { arrayUploadFirebase } from '../../../modules/firebase/upload';

export const editProductDetail = (callThis, event, productId, existedProductFile) => {
    event.preventDefault();

    if(callThis.state.productImageUpload.length + callThis.state.productVideoUpload.length + existedProductFile.length > 5) {
        alert('You can only have 5 photos / videos for each product !'); return;
    }

    const validator = editProductValidate(callThis);

    if(validator === 'success') {                                  
        callThis.setState({ showLoadingState: true });

        const date = new Date();
        const now = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();            

        const post = () => {
            const productFileList = [];
            var productPrice;

            if(callThis.state.productPriceInput !== '') {
                productPrice = parseFloat(callThis.state.productPriceInput);
            }
            else {
                productPrice = '';
            }

            if(callThis.state.productFileUrl.length > 0) {
                for(let i = 0; i < existedProductFile.length; i++) {
                    productFileList.push(existedProductFile[i]);

                    if(productFileList.length === existedProductFile.length) {
                        callThis.state.productFileUrl.map(item => productFileList.push(item));
                    }
                }
            }                                
            
            const postData = {
                time: now,
                name: callThis.state.productNameInput,
                price: productPrice,                    
                quantity: callThis.state.productQuantityInput,
                description: callThis.state.productDescriptionInput,
                file: productFileList,
                category: callThis.state.productCategory,
                option: callThis.state.productOption
            }

            axios.post('http://localhost:5000/product/manage/detail/edit/?product=' + productId, postData, axiosConfig)
            .then(res => {
                if(res) {
                    callThis.setState({ showLoadingState: false });
                }
                if(res.data.protect === 'miss' || res.data.product === 'edit product detail: product is not existed') {
                    alert('There are problems. Sign in again, please !');

                    callThis.props.history.push('/authentication'); return;                        
                }
                if(res.data.product === 'edit product detail: category length over 3 items') {
                    alert('Category has over 3 items. Try again, please !'); return;
                }                  
                if(res.data.product === 'edit product detail: success') {
                    alert('Edit product detail success !');
                    
                    window.location.reload(); return;                                                
                }
            });                
        }

        if(callThis.state.productImageUpload.length > 0 || callThis.state.productVideoUpload.length > 0) {
            const storageRef = 'store/';
            const storageChild = callThis.props.storeInfo._id + '/product/date/' + now + '/' + callThis.state.productNameInput + '/file/';

            const productFileUpload = callThis.state.productImageUpload.concat(callThis.state.productVideoUpload);

            arrayUploadFirebase(callThis, storageRef, storageChild, productFileUpload, 'productFileUrl', post);
        }
        else {
            post();
        }
    }    
}