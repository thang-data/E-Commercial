import { whitespaceValidate } from '../../../modules/validate/whitespace-validate';

export const orderValidate = (callThis, productOption) => {    
    const name = callThis.state.nameInput;
    const phone = callThis.state.phoneInput;
    const country = callThis.state.countryInput;
    const city = callThis.state.cityInput;
    const address = callThis.state.addressInput;
    const option = callThis.state.optionInput;

    if(productOption.length > 0) {
        if(!option) {
            alert('All field are compulsory. Try again, please !'); return; 
        }
    }
    if(!name || !phone || !country || !city || !address) {
        alert('All field are compulsory. Try again, please !'); return;        
    }
    if(whitespaceValidate(name) === false || whitespaceValidate(phone) === false || whitespaceValidate(address) === false) {
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
    if(address.length > 250) {
        alert('Just use 1 - 250 characters for address. Try again, please !'); return;
    }
    else {
        return 'success';
    }
}