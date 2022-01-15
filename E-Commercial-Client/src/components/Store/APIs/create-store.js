import axios from 'axios';
import { axiosConfig } from '../../../App';
import { createStoreValidate } from '../Modules/create-store-validate';
import { simpleUploadFirebase } from '../../../modules/firebase/upload';

export const createStore = (callThis, event, accountId) => {
    event.preventDefault(); 
    
    const validator = createStoreValidate(callThis);        
        
    if(validator === 'success') {
        callThis.setState({ showCreatingStoreState: true });

        const create = () => {
            const postData = {
                storeLogo: callThis.state.logoImg,
                storeName: callThis.state.storeNameInput,
                storeEmail: callThis.state.storeEmailInput,                        
                storePhone: callThis.state.storePhoneInput,
                storeAddress: callThis.state.storeAddressInput            
            }                    

            axios.post('http://localhost:5000/store/create/?account=' + accountId, postData, axiosConfig)
            .then(res => {
                if(res) {
                    callThis.setState({ showCreatingStoreState: false });
                }
                if(res.data.protect === 'miss' || res.data.store === 'create store: account is not existed') {
                    alert('Account is not existed or you are not sign in.');

                    callThis.props.history.push('/authentication'); return;
                }
                if(res.data.store === 'create store: email is existed') {
                    alert('This email is existed. Try again, please !'); return;                        
                }
                if(res.data.store === 'create store: success') {
                    alert('Success ! Now, you have a store, and you can sell your product.'); 
                    
                    window.location.reload(); return;                                                
                }
            });
        }

        if(callThis.state.logoImg !== '') {
            const storageRef = 'store/';
            const storageChild = callThis.state.storeEmailInput + '/' + 'logo/';                                                

            simpleUploadFirebase(callThis, storageRef, storageChild, callThis.state.logoImg, 'logoImg', create);
        }
        else {
            create();
        }
    }       
}