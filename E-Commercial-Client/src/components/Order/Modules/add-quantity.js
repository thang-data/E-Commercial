export const addQuantity = (callThis, existedQuantity) => {
    if(callThis.state.quantityInput < existedQuantity) {
        callThis.setState({ 
            quantityInput: callThis.state.quantityInput + 1, 
            productCost: callThis.state.productCost + callThis.props.productDetail.price
        }); return;
    }
    else {
        alert('There are(is) only ' + existedQuantity + 'item(s)'); return;
    }    
}