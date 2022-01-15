import axios from 'axios';
import { axiosConfig } from '../../../App';
import { emailValidate } from '../Modules/email-validate';

export const handleForgotPassword = (callThis, event) => {
    event.preventDefault();

    const validator = emailValidate(callThis);

    if(validator === 'success') {
        callThis.setState({ showLoadingState: true });

        const postData = {
            email: callThis.state.accountEmailInput
        }

        axios.post('http://localhost:5000/authentication/password/forgot/', postData, axiosConfig)
        .then(res => {
            if(res) {
                callThis.setState({ showLoadingState: false });
            }
            if(res.data.authentication === 'forgot authentication password: account is not existed') {
                alert('This account is not existed. Try again, please !'); return;
            }        
            if(res.data.authentication === 'forgot authentication password: success') {
                callThis.setState({ resetPassword: true });

                localStorage.setItem('reset-password', callThis.state.accountEmailInput); return;
            }    
        });
    }
}