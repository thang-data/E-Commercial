import { whitespaceValidate } from '../../../modules/validate/whitespace-validate';

export const resetPasswordValidate = (callThis) => {    
    const accountEmail = localStorage.getItem('reset-password');
    const verifyCode = callThis.state.verifyCodeInput;
    const resetPassword = callThis.state.resetPasswordInput;
    const resetPasswordAgain = callThis.state.resetPasswordAgainInput;

    if(!verifyCode || !resetPassword || !resetPasswordAgain) {
        alert('All field are compulsoryDo not use only whitespace or linebreak. Try again, please !'); return;
    }
    if(whitespaceValidate(verifyCode) === false || whitespaceValidate(resetPassword) === false || whitespaceValidate(resetPasswordAgain) === false) {
        alert('Do not use only whitespace or linebreak. Try again, please !'); return;
    }
    if(!(resetPassword.match(/^[0-9a-zA-Z]+$/))) {            
        alert('Just use these character for password: [a -> z; A -> Z; 0 -> 9]. Try again, please !'); return;
    }        
    if(resetPassword.length < 6 || resetPassword.length > 50) {            
        alert('Just use 6 - 50 characters for password. Try again, please !'); return;
    }
    if(resetPassword !== resetPasswordAgain) {
        alert('Password again is not match the other. Try again, please !'); return;        
    }
    if(!accountEmail || !(accountEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) || accountEmail.length < 3 || accountEmail.length > 50) {
        alert('There are problems. Try again, please !');

        window.location.reload(); return;
    }
    else {
        return 'success';
    }
}