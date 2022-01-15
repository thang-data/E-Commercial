import React, { Fragment } from 'react';

class OrderProductDetail extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='order-product-detail-container'>
                    <div className='order-product-file-container'>
                        {
                            this.props.productDetail.file[0].type === 'image' ?
                            <img alt='product-img' src={ this.props.productDetail.file[0].url } className='order__product-file' />:
                            <video src={ this.props.productDetail.file[0].url } className='order__product-file' />
                        }                                        
                    </div>
                    <div className='order__product-name'><p><b>{ this.props.productDetail.name }</b></p></div>
                    <p><b>|</b></p>
                    <div className='order__product-description'><p><b>{ this.props.productDetail.description }</b></p></div>
                </div>
            </Fragment>
        );
    }
}

export default OrderProductDetail