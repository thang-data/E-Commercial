export const addProductCategory = (callThis, event) => {
    if(event.target.checked === true) {
        callThis.state.productCategory.push(event.target.value);
    }
    if(event.target.checked === false) {
        callThis.state.productCategory.map((item, index) => {
            if(item === event.target.value) {
                callThis.state.productCategory.splice(index, 1);
            }
        });        
    }
    
    callThis.setState({ productCategory: callThis.state.productCategory }); return;
}