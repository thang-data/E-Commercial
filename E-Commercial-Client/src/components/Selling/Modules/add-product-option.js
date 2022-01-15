export const addProductOption = (callThis) => {
    const optionInput = callThis.state.productOptionInput;
    
    if(optionInput === '') {
        alert('There is not any options. Try again, please !'); return;        
    }
    if(optionInput.length < 1 || optionInput.length > 20) {            
        alert('Just use 1 - 20 characters for option. Try again, please !'); return;
    }
    
    callThis.state.productOption.push(optionInput);
        
    callThis.setState({ productOption: callThis.state.productOption, productOptionInput: '' }); return;       
}