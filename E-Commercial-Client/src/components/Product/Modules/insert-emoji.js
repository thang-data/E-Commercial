export const insertEmoji = (callThis, list, index) => {
    callThis.setState({ productCommentInput: callThis.state.productCommentInput + list[index] }); return;
}