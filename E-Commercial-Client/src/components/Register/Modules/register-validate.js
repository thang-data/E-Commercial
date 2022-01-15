import { whitespaceValidate } from '../../../modules/validate/whitespace-validate';

export const registerValidate = (callThis) => {
    const name = callThis.state.accountNameInput;
    const phone = callThis.state.accountPhoneInput;
    const email = callThis.state.accountEmailInput;
    const password = callThis.state.accountPasswordInput;
    const verify = callThis.state.passwordAgainInput;

    if(!name || !phone || !email || !password || !verify) {
        alert('All field are compulsory. Try again, please !'); return;        
    }
    if(whitespaceValidate(name) === false || whitespaceValidate(phone) === false || whitespaceValidate(email) === false || whitespaceValidate(password) === false) {
        alert('Do not use only whitespace or linebreak. Try again, please !'); return;
    }
    if(!(name.match(/^[a-zA-Z0-9 ]*$/))) {            
        alert('Just use these character for name: [a -> z; A -> Z; 0 -> 9]. Try again, please !'); return;            
    }
    if(name.length < 5 || name.length > 25) {            
        alert('Just use 2 - 100 characters for name. Try again, please !'); return;            
    }
    if(!(phone.match(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i)) || phone.length < 3 || phone.length > 12) {            
        alert('This phone number has wrong format. Try again, please !'); return;
    }        
    if(!(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) || email.length < 3 || email.length > 50) {            
        alert('This email has wrong format. Try again, please !'); return;
    }
    if(!(password.match(/^[0-9a-zA-Z]+$/))) {            
        alert('Just use these character for password: [a -> z; A -> Z; 0 -> 9]. Try again, please !'); return;
    }        
    if(password.length < 6 || password.length > 50) {            
        alert('Just use 6 - 50 characters for password. Try again, please !'); return;
    }
    if(password !== verify) {
        alert('Password again is not match the other. Try again, please !'); return;        
    }
    else {
        return 'success';
    }
}