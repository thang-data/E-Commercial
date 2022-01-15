import axios from 'axios';
import { axiosConfig } from '../../../App';

export const deleteStoreLogo = (callThis, storeId) => {    
    callThis.setState({ showDeletingLogoState: true });

    const postData = {               
        logo: ''            
    }
    
    axios.post('http://localhost:5000/store/manage/logo/update/?store=' + storeId, postData, axiosConfig)
    .then(res => {
        if(res) {
            callThis.setState({ showDeletingLogoState: false });
        }
        if(res.data.protect === 'miss' || res.data.store === 'update store logo:  store is not existed') {
            alert('There are problems. Sign in again, please !');

            callThis.props.history.push('/authentication'); return;
        }
        if(res.data.store === 'update store logo: success') {
            alert('Delete store logo success !');
            
            window.location.reload(); return;                                
        }
    });
}