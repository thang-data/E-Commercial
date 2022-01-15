export const closeResult = (callThis) => {
    callThis.setState({ typing: false, input: '', result: [] }); return;
}