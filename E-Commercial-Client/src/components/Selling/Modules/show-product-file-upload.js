export const showProductFileUpload = (callThis, event, count) => {
    const fileCount = event.target.files.length;        

    for(let i = 0; i < fileCount; i++) {
        if(callThis.state.productImage.length >= count || fileCount > count) {
            alert('Only upload ' + count + ' photos / video. Try again, please !');
            return;
        }
        if(event.target.files[i].type.split('/')[0] === 'video') {                                               
            callThis.state.productVideoUpload.push(event.target.files[i]);
            
            const vid = event.target.files[i];
        
            const blobURL = URL.createObjectURL(vid);

            callThis.state.productVideo.push(blobURL);
            

            callThis.setState({ productVideo: callThis.state.productVideo, productVideoUpload: callThis.state.productVideoUpload });                        
        }
        if(event.target.files[i].type.split('/')[0] === 'image') {
            const reader = new FileReader();

            const img = document.getElementsByClassName('selling__product-file');            

            reader.onload = function() {
                img.src = reader.result;

                callThis.state.productImage.push(reader.result);

                callThis.setState({ productImage: callThis.state.productImage });
            }

            if(fileCount > 0){        
                reader.readAsDataURL(event.target.files[i]);
                
                callThis.state.productImageUpload.push(event.target.files[i]);

                callThis.setState({ productImageUpload: callThis.state.productImageUpload });
            }
        }
        
    } return;
}