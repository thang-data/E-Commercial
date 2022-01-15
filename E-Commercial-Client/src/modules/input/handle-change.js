export const handleChange = (callThis, event, state) => {
    callThis.setState({ [`${state}`]: event.target.value }); return;    
}