export const showStoreLogoUpload = (callThis, event) => {
    const reader = new FileReader();

    const callThisTwice = callThis;

    const img = document.getElementsByClassName('store__upload-logo-output');

    reader.onload = function() {
      img.src = reader.result;

      callThisTwice.setState({ storeLogoInput: reader.result });
    }

    reader.readAsDataURL(event.target.files[0]);

    callThis.setState({ logoImg: event.target.files[0] }); return;    
}