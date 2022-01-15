import React, { createRef, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { postProductComment } from './APIs/post-product-comment';
import { handleChange } from '../../modules/input/handle-change';
import { showEmojiList } from './Modules/show-emoji-list';
import { insertEmoji } from './Modules/insert-emoji';
import Emoji from '../Emoji/Emoji';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

class ProductComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productCommentInput: '',
            emojiList: ['😀', '😅', '🤣', '😉', '😘', '😎', '😥', '😠', '😏', '😮'],
            showEmojiList: false,
            showLoadingState: false, 
        }

        //APIs
        this.postProductComment = this.postProductComment.bind(this);

        //Modules
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.showEmojiList = this.showEmojiList.bind(this);
        this.insertEmoji = this.insertEmoji.bind(this);
        this.commentEndRef = createRef();
    }

    //APIs
    postProductComment(event) {
        postProductComment(this, event, this.props.accountInfo, this.props.productInfo, this.props.storeInfo);
    }

    //Modules
    handleChangeComment(event) {
        handleChange(this, event, 'productCommentInput');
    }

    showEmojiList() {
        showEmojiList(this);
    }

    insertEmoji(index) {
        insertEmoji(this, this.state.emojiList, index);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <div className='product-viewer-comment-container'>
                        <p className='product-viewer-comment__title'><b>Comments:</b></p>
                        <div className='product-viewer-comment-list'>                            
                            {
                                this.props.productCommentList.map(item => 
                                    <div className='product-viewer-comment-inner'>
                                        <div className='product-viewer-comment__detail'>
                                            <div>
                                                {
                                                    item.account.avatar === '' ?
                                                    <img alt='account-avatar' src={ this.props.accountIcon } className='product-viewer-comment__avatar' />:
                                                    <img alt='account-avatar' src={ item.avatar } className='product-viewer-comment__avatar' />
                                                }
                                            </div>
                                            <p className='product-viewer-comment__name'><b>{ item.account.name }</b></p>
                                            {
                                                this.props.accountInfo._id === item.account._id ?
                                                <p className='product-viewer-comment__me-tag'><b>(Me)</b></p>:
                                                null
                                            }
                                            {
                                                item.comment.seller ?
                                                <p className='product-viewer-comment__seller-tag'><b>Seller</b></p>:
                                                null
                                            }
                                        </div>
                                        <p className='product-viewer-comment__content'>{ item.comment.content }</p>
                                    </div>
                                )
                            }
                            <div ref={ this.commentEndRef }></div>
                        </div>
                        <form onSubmit={ this.postProductComment } className='product-viewer-comment-input-container'>
                            <textarea 
                                type='text'
                                placeholder='Your comment'
                                value={ this.state.productCommentInput }
                                onChange={ this.handleChangeComment }
                                className='product-viewer-comment__input input input-with-border input-with-border--focus'
                            />
                            <InsertEmoticonIcon className='insert-emoji-btn insert-emoji-btn--hover' onClick={ this.showEmojiList } />                            
                            {
                                this.state.showEmojiList ?
                                <Emoji emojiList={ this.state.emojiList } insertEmoji={ this.insertEmoji } />:
                                null
                            }
                            {
                                this.state.showLoadingState ?
                                <input
                                    type='submit'
                                    disabled
                                    value='Sending...'
                                    className='gray-btn btn'
                                />:
                                <input
                                    type='submit'                                    
                                    value='Send'
                                    className='gray-btn btn'
                                />                                
                            }                                                                
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(ProductComment);