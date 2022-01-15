import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

class ProductDetail extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='product-viewer-detail-container'>                                            
                    <p className='product-viewer-detail__name'><b>{ this.props.productDetail.name }</b></p>
                    <p className='product-viewer-detail__time'><i>{ this.props.productDetail.time }</i></p>
                    <p className='product-viewer-detail-store'>
                        <b className='product-viewer-detail-store__title'>Store:</b>&emsp;
                        <span className='product-viewer-detail-store__name'><b>{ this.props.productStore.name }</b></span>&emsp;|&emsp;
                        <span className='product-viewer-detail-store__phone'><b>{ this.props.productStore.phone }</b></span>&emsp;
                        <span className='product-viewer-detail-store__email'><b>{ this.props.productStore.email }</b></span>                                
                    </p>
                    <hr />                    
                    <p className='product-viewer-detail__price'>
                        <b>Price:&emsp;</b>
                        {
                            this.props.productDetail.discount > 0 ?
                            <span className='product-viewer-detail-price__current-value'><b className='product-viewer-detail-price__old-value'>${ this.props.productDetail.price + this.props.productDetail.discount }</b>&emsp;--&emsp;<b>${ this.props.productDetail.price }</b></span>:
                            <span className='product-viewer-detail-price__current-value'><b>${ this.props.productDetail.price }</b></span>
                        }                                
                    </p>                            
                    {
                        this.props.productDetail.quantity === 0 ?                                        
                        <p className='product-viewer-detail__quantity'>Quantity:&emsp;<span><b className='sold-out__tag'><i>Sold Out</i></b></span></p>:
                        <p className='product-viewer-detail__quantity'>Quantity:&emsp;<span><b>                                    
                            { this.props.productDetail.quantity } { this.props.productDetail.quantity === 1 ? <b>item</b>:<b>items</b> }
                        </b></span></p>
                    }                                                
                    {
                        this.props.productDetail.option.length > 0 ?
                        <p className='product-viewer-detail__choice'>Option:&emsp;<span>{ this.props.productDetail.option.map(item => <b>{ item }&emsp;|&emsp;</b>) }</span></p>:                                
                        null
                    }
                    <p>From:&emsp;<span><b>{ this.props.productDetail.address[1] }, { this.props.productDetail.address[0] }</b></span></p>                    
                    {
                        this.props.productStore._id !== Cookies.get('store') ?
                        <div className='product-viewer-option-container'>
                            {
                                this.props.productDetail.quantity > 0 ?
                                <div className='yellow-btn btn btn--hover' onClick={ this.props.showOrderForm }><p><b>Buy now</b></p></div>:
                                null
                            }                                                                                                        
                            <div className='product__add-to-cart-btn gray-btn btn btn--hover' onClick={ this.props.addCartItem }><p><b>Add to cart</b></p></div>
                        </div>:
                        null
                    }                                                                    
                </div>
            </Fragment>
        );
    }
}

export default withRouter(ProductDetail);