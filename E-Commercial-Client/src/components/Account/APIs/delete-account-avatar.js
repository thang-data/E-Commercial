import axios from 'axios';
import { axiosConfig } from '../../../App';

export const deleteAccountAvatar = (callThis) => {        
    callThis.setState({ showDeletingAvatarState: true, showEditingInfo: false });

    const postData = {               
        avatar: ''            
    }
    
    axios.post('http://localhost:5000/account/manage/avatar/update/?account=' + callThis.props.accountInfo._id, postData, axiosConfig)
    .then(res => {
        if(res) {
            callThis.setState({ showDeletingAvatarState: false, showEditingInfo: true });
        }
        if(res.data.protect === 'miss' || res.data.account === 'update account avatar: account is not existed') {
            alert('There are problems. Sign in again, please !');

            callThis.props.history.push('/authentication'); return;
        }
        if(res.data.account === 'update account avatar: success') {
            alert('Delete account avatar success !');

            window.location.reload(); return;
        }
    });
}