import axios from 'axios';
import { axiosConfig } from '../../../App';
import { simpleUploadFirebase } from '../../../modules/firebase/upload';

export const updateStoreLogo = (callThis, storeId) => {    
    callThis.setState({ showUploadingLogoState: true });

    const update = () => {
        const postData = {               
            logo: callThis.state.logoImg            
        }
        
        axios.post('http://localhost:5000/store/manage/logo/update/?store=' + storeId, postData, axiosConfig)
        .then(res => {
            if(res) {
                callThis.setState({ showUploadingLogoState: false });
            }
            if(res.data.protect === 'miss' || res.data.store === 'update store logo: store is not existed') {
                alert('There are problems. Sign in again, please !');

                callThis.props.history.push('/authentication'); return;
            }
            if(res.data.store === 'update store logo: success') {
                alert('Update store log: success !');                    

                window.location.reload(); return;                    
            }
        });
    }

    const storageRef = 'store/';
    const storageChild = callThis.state.storeEmailInput + '/' + 'logo/';                                                

    simpleUploadFirebase(callThis, storageRef, storageChild, callThis.state.logoImg, 'logoImg', update);
}