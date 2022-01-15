import axios from 'axios';
import { axiosConfig } from '../../../App';
import { registerValidate } from '../Modules/register-validate';

export const handleRegister = (callThis, event) => {
    event.preventDefault();

    const validator = registerValidate(callThis);

    if(validator === 'success') {
        callThis.setState({ showLoadingState: true });

        const postData = {
            accountName: callThis.state.accountNameInput,
            accountPhone: callThis.state.accountPhoneInput,
            accountEmail: callThis.state.accountEmailInput,
            accountPassword: callThis.state.accountPasswordInput
        }        

        axios.post('http://localhost:5000/register/', postData, axiosConfig)
        .then(res => {
            if(res) {
                callThis.setState({ showLoadingState: false });
            }
            if(res.data.register === 'handle register: email is existed') {
                alert('This email is existed. Try another, please !'); return;                
            }
            if(res.data.register === 'handle register: phone is existed') {
                alert('This phone number is existed. Try another, please !'); return;                
            }
            if(res.data.register === 'handle register: success') {
                alert('Register success ! Sign in, now');

                callThis.props.history.push('/authentication'); return;
            }
        });        
    }        
}