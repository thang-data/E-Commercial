export const changeFileView = (callThis, type, url) => {
    callThis.setState({ productFileViewUrl: url, productFileViewType: type, }); return;
}