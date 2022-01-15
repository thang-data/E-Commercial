export const resetProductCategory = (callThis) => {    
    callThis.setState({ productCategory: [] });
    
    const elements = document.getElementsByTagName('input');

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].type === 'checkbox') {
            elements[i].checked = false;
        }
    } return;    
}