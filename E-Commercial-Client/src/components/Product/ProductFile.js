import React, { Fragment } from 'react';
import { productFilePopup } from './Modules/product-file-popup';

class ProductFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productFilePopup: false,
        }

        //Modules        
        this.productFilePopup = this.productFilePopup.bind(this);
    }

    //Modules
    productFilePopup() {
        productFilePopup(this);
    }

    render() {
        return (
            <Fragment>
                <div className='product-viewer-file-list-container'>
                    {
                        this.props.productDetailFile.length > 1 ?
                        <div className='product-viewer__file-list'>
                            {
                                this.props.productDetailFile.map(item =>
                                    <div className='product-viewer-file-container product-viewer-file-container--hover' onClick={ () => this.props.changeFileView(item.type, item.url) }>
                                        {
                                            item.type === 'image' ?
                                            <img alt='product-img' src={ item.url } className='product-viewer__file' />:
                                            <video src={ item.url } className='product-viewer__file' controls />
                                        }                                        
                                    </div>                                        
                                )                        
                            }
                        </div>:
                        null
                    }                    
                    <div className='product-viewer-file-display-container'>
                        {
                            this.props.productFileViewType === 'image' ?
                            <img alt='product-img' src={ this.props.productFileViewUrl } className='product-viewer__file-display' onClick={ this.productFilePopup } />:
                            <video alt='product-vid' src={ this.props.productFileViewUrl } className='product-viewer__file-display' controls />
                        }                        
                    </div>
                    {
                        this.state.productFilePopup ?
                        <div className='product-viewer-file-popup-container' onClick={ this.productFilePopup }>
                            <div className='product-viewer-file-popup__background'>
                                <img alt='product-img' src={ this.props.productFileViewUrl } className='product-viewer__file-popup' />
                            </div>                                
                        </div>:
                        null
                    }
                </div>
            </Fragment>            
        );
    }
}

export default ProductFile;