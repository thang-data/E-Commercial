export const deleteProductOption = (callThis, index) => {
    callThis.state.productOption.splice(index, 1);

    callThis.setState({ productOption: callThis.state.productOption }); return;    
}