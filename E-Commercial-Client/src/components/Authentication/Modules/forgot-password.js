export const forgotPassword = (callThis) => {
    callThis.setState({ forgotPassword: !callThis.state.forgotPassword, accountEmailInput: '', accountPasswordInput: '' }); return;
}