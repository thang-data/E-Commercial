import { whitespaceValidate } from '../../../modules/validate/whitespace-validate';

export const emailValidate = (callThis) => {
    const email = callThis.state.accountEmailInput;

    if(!email) {
        alert('All field are compulsory. Try again, please !'); return;        
    }
    if(whitespaceValidate(email) === false) {
        alert('Do not use only whitespace or linebreak. Try again, please !'); return;
    }
    if(!(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) || email.length < 3 || email.length > 50) {            
        alert('This email has wrong format. Try again, please !'); return;
    }
    else {
        return 'success';
    }
}