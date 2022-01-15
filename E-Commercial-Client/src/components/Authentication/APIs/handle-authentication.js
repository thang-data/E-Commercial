import axios from 'axios';
import Cookies from 'js-cookie';
import { authenticationValidate } from '../Modules/authentication-validate';
import { axiosConfig } from '../../../App';

export const handleAuthentication = (callThis, event) => {
    event.preventDefault();

    const validator = authenticationValidate(callThis);

    if(validator === 'success') {
        callThis.setState({ showLoadingState: true });

        const postData = {
            accountEmail: callThis.state.accountEmailInput,
            accountPassword: callThis.state.accountPasswordInput
        }        

        axios.post('http://localhost:5000/authentication/', postData, axiosConfig)
        .then(res => {
            if(res) {
                callThis.setState({ showLoadingState: false });
            }
            if(res.data.authentication === 'handle authentication: wrong email or password') {
                alert('Wrong email or password. Try again, please !'); return;                
            }
            if(res.data.authentication.message === 'handle authentication: success') {                
                const info = res.data.authentication;
                
                Cookies.set('account', info.account._id);
                                                          
                if(info.account.store !== '') {                    
                    Cookies.set('store', info.account.store);                                      
                }
                else {
                    Cookies.set('store', '');
                }                                
                                
                callThis.props.history.push('/'); 
                
                window.location.reload(); return;                                                     
            }
        });
    }
}