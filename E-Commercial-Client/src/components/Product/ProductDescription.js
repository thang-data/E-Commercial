import React, { Fragment } from 'react';
import { showDescription } from './Modules/show-description';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class ProductDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDescription: true
        }

        //Modules
        this.showDescription = this.showDescription.bind(this);        
    }

    //Modules
    showDescription() {
        showDescription(this);
    }    

    render() {
        return (
            <Fragment>
                {
                    this.props.productDetail.description !== '' ?
                    <div className='product-viewer-detail__description'>                                                        
                        <p><b><u>About this product:</u></b></p><br />
                        {
                            this.state.showDescription ?
                            null:
                            <p className='txt-btn txt-btn-paler--hover' onClick={ this.showDescription }><b>Show more&emsp;</b><span><KeyboardArrowDownIcon className='product-description__show-icon' /></span></p>
                        }                                                   
                        {
                            this.state.showDescription ?
                            <div>
                                <p>{ this.props.productDetail.description }</p>
                                <p className='txt-btn txt-btn-paler--hover' onClick={ this.showDescription }><b>Show less&emsp;</b><span><KeyboardArrowUpIcon className='product-description__show-icon' /></span></p>
                            </div>:                                                        
                            null
                        }
                    </div>:
                    null
                }
            </Fragment>
        );
    }
}

export default ProductDescription;