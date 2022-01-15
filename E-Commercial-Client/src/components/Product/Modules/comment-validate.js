import { whitespaceValidate } from "../../../modules/validate/whitespace-validate";

export const commentValidate = (callThis) => {
    const comment = callThis.state.productCommentInput;

    if(!comment) {
        alert('You did not commented anythings. Try again, please !'); return;
    }
    if(whitespaceValidate(comment) === false) {
        alert('Do not use only whitespace or linebreak. Try again, please !'); return;
    }
    if(comment.length > 200) {            
        alert('Just comment with 1 - 200 characters. Try again, please !'); return;
    }
    else {
        return 'success';
    }
}