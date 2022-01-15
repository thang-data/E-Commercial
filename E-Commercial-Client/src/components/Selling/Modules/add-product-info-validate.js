import { whitespaceValidate } from '../../../modules/validate/whitespace-validate';

export const addProductInfoValidate = (callThis, stateName) => {
    const productOption = callThis.state.productOptionInput;
    const productCategory = callThis.state.productCategory;    

    switch(stateName) {
        case 'productOptionInput': 
            if(!productOption) { 
                alert('You did not edited anythings. Try again, please !'); return; 
            } 
            if(productOption.length < 1 || productOption.length > 20) {            
                alert('Just use 1 - 20 characters for option. Try again, please !'); return;
            }
            if(whitespaceValidate(productOption) === false) {
                alert('Do not use only whitespace or linebreak. Try again, please !'); return;
            }
            break;
        case 'productCategory': if(!productCategory) { alert('You did not edited anythings. Try again, please !'); return; } break;
    }            
    return 'success';
}