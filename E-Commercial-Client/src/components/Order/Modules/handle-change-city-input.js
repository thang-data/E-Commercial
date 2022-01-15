export const handleChangeCityInput = (callThis, event) => {
    callThis.setState({ cityInput: event.target.value });

    if(event.target.value === callThis.props.productDetail.address[1]) {
        callThis.setState({ shippingCost: 2.5 }); return;        
    }
    else {
        callThis.setState({ shippingCost: 5 }); return;
    }    
}