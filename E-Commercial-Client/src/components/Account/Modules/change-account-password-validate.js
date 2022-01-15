import { whitespaceValidate } from '../../../modules/validate/whitespace-validate';

export const changeAccountPasswordValidate = (callThis) => {
    const oldPassword = callThis.state.accountOldPasswordInput;
    const newPassword = callThis.state.accountNewPasswordInput;
    const newPasswordAgain = callThis.state.accountNewPasswordAgainInput;

    if(oldPassword === newPassword) {
        alert('New password must be different from the old one. Try again, please !'); return;
    }
    if(whitespaceValidate(newPassword) === false) {
        alert('Do not use only whitespace or linebreak. Try again, please !'); return;
    }
    if(!(newPassword.match(/^[0-9a-zA-Z]+$/))) {            
        alert('Just use these character for password: [a -> z; A -> Z; 0 -> 9]. Try again, please !'); return;
    }        
    if(newPassword.length < 6 || newPassword.length > 50) {            
        alert('Just use 6 - 50 characters for password. Try again, please !'); return;
    }
    if(newPassword !== newPasswordAgain) {
        alert('Password again is not match the other. Try again, please !'); return;
    }
    return 'success';
}