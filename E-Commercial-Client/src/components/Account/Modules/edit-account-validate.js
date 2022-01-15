import { whitespaceValidate } from '../../../modules/validate/whitespace-validate';

export const editAccountValidate = (callThis) => {   
    const accountName = callThis.state.accountNameInput;
    const accountEmail = callThis.state.accountEmailInput;
    const accountPhone = callThis.state.accountPhoneInput;

    if(!accountName && !accountEmail && !accountPhone) {
        alert('You did not edited anythings. Try again, please !'); return;        
    }
    if(whitespaceValidate(accountName) === false || whitespaceValidate(accountEmail) === false || whitespaceValidate(accountPhone) === false) {
        alert('Do not use only whitespace or linebreak. Try again, please !'); return;
    }
    if(accountName) {
        if(!(accountName.match(/^[a-zA-Z0-9 ]*$/))) {            
            alert('Just use these character for name: [a -> z; A -> Z; 0 -> 9]. Try again, please !'); return;            
        }
        if(accountName.length < 2 || accountName.length > 100) {            
            alert('Just use 2 - 100 characters for name. Try again, please !'); return;            
        }
    }
    if(accountEmail) {
        if(!(accountEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) || accountEmail.length < 3 || accountEmail.length > 100) {
            alert('This email has wrong format. Try again, please !'); return;            
        }
    }
    if(accountPhone) {
        if(!(accountPhone.match(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i)) || accountPhone.length < 3 || accountPhone.length > 12) {            
            alert('This phone number has wrong format. Try again, please !'); return;            
        }
    }                  
    else {
        return 'success';
    }
}