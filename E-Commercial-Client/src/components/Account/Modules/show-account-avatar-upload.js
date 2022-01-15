export const showAccountAvatarUpload = (callThis, event) => {
    const reader = new FileReader();

    const callThisTwice = callThis;

    const img = document.getElementsByClassName('account__upload-avatar-output');

    reader.onload = function() {
      img.src = reader.result;

      callThisTwice.setState({ accountAvatarInput: reader.result });
    }

    reader.readAsDataURL(event.target.files[0]);

    callThis.setState({ avatarImg: event.target.files[0] }); return;    
}