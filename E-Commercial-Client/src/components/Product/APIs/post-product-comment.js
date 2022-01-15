import axios from 'axios';
import { axiosConfig } from '../../../App';
import { commentValidate } from '../Modules/comment-validate';

export const postProductComment = (callThis, event, accountInfo, productInfo, storeInfo) => {
    event.preventDefault();
    
    const validator = commentValidate(callThis);

    if(validator === 'success') {
        callThis.setState({ showLoadingState: true });
        
        var isSeller = false;

        for(let i = 0; i <= storeInfo.product.length; i++) {
            if(accountInfo.store === storeInfo._id) {
                isSeller = true;
            }

            if(i === storeInfo.product.length - 1) {
                const postData = {
                    comment: callThis.state.productCommentInput,
                    seller: isSeller
                }

                axios.post('http://localhost:5000/product/comment/post/?account=' + accountInfo._id + '&product=' + productInfo._id, postData, axiosConfig)
                .then(res => {
                    if(res) {
                        callThis.setState({ showLoadingState: false });
                    }
                    if(res.data.protect === 'miss' || res.data.product === 'post product comment: account is not existed' || res.data.product === 'post product comment: product is not existed') {
                        alert('There are problems. Sign in again, please !');

                        callThis.props.history.push('/authentication'); return;                        
                    }
                    if(res.data.product === 'post product comment: success') {console.log(accountInfo)                
                        callThis.props.productCommentList.push({                            
                            account: accountInfo,
                            comment: {
                                seller: isSeller,
                                content: callThis.state.productCommentInput
                            }
                        });
                        
                        callThis.setState({ productCommentList: callThis.state.productCommentList, productCommentInput: '' }); 
                        
                        callThis.commentEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" }); return;
                    }
                });
            }
        }        
    }
}