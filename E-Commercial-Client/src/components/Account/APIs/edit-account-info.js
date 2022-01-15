import axios from 'axios';
import { axiosConfig } from '../../../App';
import { editAccountValidate } from '../Modules/edit-account-validate';

export const editAccountInfo = (callThis, event, accountId) => {
    event.preventDefault();
        
    const validator = editAccountValidate(callThis);

    if(validator === 'success') {
        callThis.setState({ showEditingInfoState: true });
        
        const postData = {                               
            name: callThis.state.accountNameInput,
            email: callThis.state.accountEmailInput,                        
            phone: callThis.state.accountPhoneInput                            
        }

        axios.post('http://localhost:5000/account/manage/info/edit/?account=' + accountId, postData, axiosConfig)
        .then(res => {
            if(res) {
                callThis.setState({ showEditingInfoState: false });
            }
            if(res.data.protect === 'miss' || res.data.account === 'edit account info: account is not existed') {
                alert('There are problems. Sign in again, please !');
                
                callThis.props.history.push('/authentication'); return;
            }
            if(res.data.account === 'edit account info: email is existed') {
                alert('This email is existed. Try again, please !'); return;                    
            }
            if(res.data.account === 'edit account info: success') {
                alert('Edit account info success !');

                window.location.reload(); return;         
            }
        });
                    
    }   
}