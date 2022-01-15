import axios from 'axios';
import { axiosConfig } from '../../../App';
import { simpleUploadFirebase } from '../../../modules/firebase/upload';

export const updateAccountAvatar = (callThis, accountId) => {             
    callThis.setState({ showUploadingAvatarState: true });

    const update = () => {
        const postData = {                               
            avatar: callThis.state.avatarImg            
        }
        
        axios.post('http://localhost:5000/account/manage/avatar/update/?account=' + accountId, postData, axiosConfig)
        .then(res => {
            if(res) {
                callThis.setState({ showUploadingAvatarState: false });
            }
            if(res.data.protect === 'miss' || res.data.account === 'update account avatar: account is not existed') {
                alert('There are problems. Sign in again, please !');

                callThis.props.history.push('/authentication'); return;
            }
            if(res.data.account === 'update account avatar: success') {
                alert('Update account avatar success !');                    

                window.location.reload(); return;                    
            }
        });
    }

    const storageRef = 'account/';
    const storageChild = callThis.state.accountEmailInput + '/' + 'avatar/';                                                

    simpleUploadFirebase(callThis, storageRef, storageChild, callThis.state.avatarImg, 'avatarImg', update);          
}