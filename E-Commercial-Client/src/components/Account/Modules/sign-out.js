import Cookies from "js-cookie"

export const signOut = (callThis) => {
    Cookies.remove('access_token');
    Cookies.remove('store');
    Cookies.remove('account');
    Cookies.remove('auth');

    callThis.props.history.push('/authentication');

    window.location.reload(); return;    
}