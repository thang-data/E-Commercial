import React, { createRef, Fragment } from 'react';
import './Product.css';
import { connect } from 'react-redux';
import { context } from '../Context/Context';
import { withRouter } from 'react-router-dom';
import { loadProductDetail } from './APIs/load-product-detail';
import { showOrderForm } from './Modules/show-order-form';  
import { changeFileView } from './Modules/change-file-view';
import { productFilePopup } from './Modules/product-file-popup';
import { handleChange } from '../../modules/input/handle-change';
import { postProductComment } from './APIs/post-product-comment';
import { addCartItem } from './APIs/add-cart-item';
import { showEmojiList } from './Modules/show-emoji-list';
import { insertEmoji } from './Modules/insert-emoji';
import Order from '../Order/Order';
import ProductFile from './ProductFile';
import ProductDetail from './ProductDetail';
import ProductDescription from './ProductDescription';
import ProductComment from './ProductComment';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emojiList: ['😀', '😅', '🤣', '😉', '😘', '😎', '😥', '😠', '😏', '😮'],
            renderDetail: false,
            showOrderForm: false,
            productStore: '',
            productDetail: '',
            productFileViewType: '',           
            productFileViewUrl: '',            
            productCommentInput: '',
            productCommentList: [],
            showEmojiList: false,
            productFilePopup: false,
            showLoadingState: false,            
        }

        //APIs
        this.addCartItem = this.addCartItem.bind(this);
        this.postProductComment = this.postProductComment.bind(this);

        //Modules
        this.showOrderForm = this.showOrderForm.bind(this);
        this.changeFileView = this.changeFileView.bind(this);
        this.productFilePopup = this.productFilePopup.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);                
        this.showEmojiList = this.showEmojiList.bind(this);
        this.insertEmoji = this.insertEmoji.bind(this);
        this.commentEndRef = createRef();
    }
    

    componentDidMount() {
        const { location } = this.props;
        loadProductDetail(this, location.pathname.split('/product/detail/view/')[1]);                
    }

    //APIs
    addCartItem() {
        addCartItem(this);
    }

    postProductComment() {
        postProductComment(this);
    }

    //Modules
    showOrderForm() {
        showOrderForm(this);
    }

    changeFileView(type, url) {
        changeFileView(this, type, url);
    }

    productFilePopup() {
        productFilePopup(this);
    }

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
        return(
            <Fragment>
                <context.Consumer>
                    {
                        (context) =>
                        <div className='product-viewer-wrapper'>
                            {
                                this.state.renderDetail ?
                                <div>
                                    <div className='product-viewer-inner'>
                                        <ProductFile
                                            changeFileView={ this.changeFileView }
                                            productFileViewType={ this.state.productFileViewType }
                                            productFileViewUrl={ this.state.productFileViewUrl } 
                                            productDetailFile={ this.state.productDetail.file }                                            
                                        />                                       
                                        <ProductDetail
                                            addCartItem={ this.addCartItem }
                                            showOrderForm={ this.showOrderForm }
                                            productDetail={ this.state.productDetail }
                                            productStore={ this.state.productStore }
                                        />                                        
                                    </div>
                                    <ProductDescription productDetail={ this.state.productDetail } />                                    
                                    <ProductComment 
                                        productCommentList={ this.state.productCommentList }
                                        accountIcon={ context.accountIcon }
                                        accountInfo={ this.props.accountInfo }
                                        storeInfo={ this.state.productStore }
                                        productInfo={ this.state.productDetail }                                                                                                                                                                                                                                                                                                                                                                   
                                    />
                                    {
                                        this.state.showOrderForm ?
                                        <Order showOrderForm={ this.showOrderForm } productDetail={ this.state.productDetail } geoList={ context.geoList } />:
                                        null
                                    }
                                </div>:
                                null
                            }                            
                        </div>
                    }
                </context.Consumer>                
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(withRouter(Product));