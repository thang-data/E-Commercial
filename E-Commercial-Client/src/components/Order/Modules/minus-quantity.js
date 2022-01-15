export const minusQuantity = (callThis) => {
    if(callThis.state.quantityInput > 1) {
        callThis.setState({ 
            quantityInput: callThis.state.quantityInput - 1,
            productCost: callThis.state.productCost - callThis.props.productDetail.price
        }); return
    }
    else {
        return;
    }   
}