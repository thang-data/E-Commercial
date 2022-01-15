export const whitespaceValidate = (input) => {
    if(input !== '') {
        const whitespaceList = [];
        const inputList = [...input];

        inputList.map(item => {
            if(item === ' ' || item === '%0D%0A') {
                whitespaceList.push(item);
            }
        });

        if(whitespaceList.length === inputList.length) {
            return false;
        }
    }    
}