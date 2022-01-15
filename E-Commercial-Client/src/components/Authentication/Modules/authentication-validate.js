export const authenticationValidate = (callThis) => {
    const email = callThis.state.accountEmailInput;
    const password = callThis.state.accountPasswordInput;

    if(!email || !password) {
        alert('All field are compulsory. Try again, please !'); return;
    }
    if(!(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) || email.length < 3 || email.length > 50 || !(password.match(/^[0-9a-zA-Z]+$/)) || password.length < 6 || password.length > 50) {            
        alert('This email or password are wrong. Try again, please !'); return;
    }    
    else {
        return 'success';
    }
}