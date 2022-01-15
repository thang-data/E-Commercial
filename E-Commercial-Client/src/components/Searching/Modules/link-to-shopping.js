export const linkToShopping = (callThis, productName) => {
    callThis.props.history.push('/shopping/load/name/' + productName);

    window.location.reload(); return;
}