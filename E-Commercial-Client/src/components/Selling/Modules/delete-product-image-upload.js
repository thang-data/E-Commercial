export const deleteProductImageUpload = (callThis, index) => {
    callThis.state.productFileUrl.splice(index, 1);
    callThis.state.productImage.splice(index, 1);
    callThis.state.productImageUpload.splice(index, 1);
    

    callThis.setState({          
        productFileUrl: callThis.state.productFileUrl,
        productImage: callThis.state.productImage, 
        productImageUpload: callThis.state.productImageUpload
    }); return;    
}