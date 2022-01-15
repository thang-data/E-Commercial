export const deleteProductVideoUpload = (callThis, index) => {
    callThis.state.productFileUrl.splice(index, 1);
    callThis.state.productVideo.splice(index, 1);
    callThis.state.productVideoUpload.splice(index, 1);
    

    callThis.setState({          
        productFileUrl: callThis.state.productFileUrl,
        productVideo: callThis.state.productVideo, 
        productVideoUpload: callThis.state.productVideoUpload
    }); return;  
}