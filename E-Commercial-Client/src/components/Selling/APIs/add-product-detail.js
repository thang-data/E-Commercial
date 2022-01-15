import axios from 'axios';
import { axiosConfig } from '../../../App';
import { addProductInfoValidate } from '../Modules/add-product-info-validate';
import { addProductOption } from '../Modules/add-product-option';

export const addProductDetail = (callThis, productId, stateName, field) => {
    const validator = addProductInfoValidate(callThis, stateName);

    if(validator === 'success') {            
        var postData;

        if(stateName === 'productOptionInput') {
            addProductOption(callThis);
            postData = {
                productData: callThis.state.productOption
            }
        }        
        if(stateName === 'productCategory') {
            postData = {
                productData: callThis.state.productCategory
            }
        }
        
        axios.post('http://localhost:5000/product/manage/detail/add/?product=' + productId + '&field=' + field, postData, axiosConfig)
        .then(res => {
            if(res.data.protect === 'miss' || res.data.product === 'add product detail: product is not existed') {
                alert('There are problems. Sign in again, please !');

                callThis.props.history.push('/authentication'); return;                        
            }
            if(res.data.product === 'add product detail: category length over 3 items') {
                alert('category length over 3 items'); return;
            }
            if(res.data.product === 'add product detail: success') {
                alert('Add product detail success !');
                
                window.location.reload(); return;                                                
            }
        });
    }
}