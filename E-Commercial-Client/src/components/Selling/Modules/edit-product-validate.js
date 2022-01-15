import { whitespaceValidate } from '../../../modules/validate/whitespace-validate';

export const editProductValidate = (callThis) => {
    const country = callThis.state.countryInput;
    const city = callThis.state.cityInput;
    const address = callThis.state.addressInput;
    const productName = callThis.state.productNameInput;
    const productImage = callThis.state.productImage;
    const productVideoUpload = callThis.state.productVideoUpload;
    const productOption = callThis.state.productOption;
    const productPrice = callThis.state.productPriceInput;
    const productQuantity = callThis.state.productQuantityInput;
    const productCategory = callThis.state.productCategory;
    const productDescription = callThis.state.productDescriptionInput;         

    if(!country && !city && !address && !productName && !productQuantity && !productPrice && !productDescription && productOption.length === 0 && productImage.length === 0 && productVideoUpload.length === 0 && productCategory.length === 0) {
        alert('You did not edit anythings. Try again, please !'); return;
    }
    if(whitespaceValidate(productName) === false || whitespaceValidate(productDescription) === false) {
        alert('Do not use only whitespace or linebreak. Try again, please !'); return;
    }
    if(productName) {
        if(productName.length < 2 || productName.length > 300) {            
            alert('Just use 2 - 300 characters for name. Try again, please !'); return;
        }        
    }    
    if(productDescription) {        
        if(productDescription.length < 2 || productDescription.length > 10000) {            
            alert('Just use 2 - 10000 characters for description. Try again, please !'); return;
        }      
    }    
    if(productPrice > 100000) {
        alert('Just set price from 0 - 100000$. Try again, please !'); return;        
    }
    if(address.length > 250) {
        alert('Just use 1 - 250 characters for address. Try again, please !'); return;
    }     
    else {
        return 'success';
    }
}