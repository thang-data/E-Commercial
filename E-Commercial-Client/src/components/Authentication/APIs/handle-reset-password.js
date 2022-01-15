import axios from 'axios';
import { axiosConfig } from '../../../App';
import { resetPasswordValidate } from '../Modules/reset-password-validate';

export const handleResetPassword = (callThis, event) => {
    event.preventDefault();

    const validator = resetPasswordValidate(callThis);

    if(validator === 'success') {
        callThis.setState({ showLoadingState: true });

        const postData = {
            email: localStorage.getItem('reset-password'),
            code: callThis.state.verifyCodeInput,
            password: callThis.state.resetPasswordInput
        }

        axios.post('http://localhost:5000/authentication/password/reset/', postData, axiosConfig)
        .then(res => {
            if(res) {
                callThis.setState({ showLoadingState: false });
            }
            if(res.data.authentication === 'reset authentication password: account is not existed') {
                alert('There are problems. Sign in again, please !'); return;
            }
            if(res.data.authentication === 'reset authentication password: success') {
                alert('Reset password success !');

                localStorage.removeItem('reset-password');

                window.location.reload(); return;
            }
        });
    }
}