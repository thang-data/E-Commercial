export const viewProduct = (callThis, productId) => {
    callThis.props.history.push(`/product/detail/view/${ productId }`);
    
    window.location.reload(); return;
}