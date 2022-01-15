import React, { Fragment } from 'react';
import { postProductDetail } from './APIs/post-product-detail';
import { editProductDetail } from './APIs/edit-product-detail';
import { handleChange } from '../../modules/input/handle-change';
import { addProductCategory } from './Modules/add-product-category';
import { resetProductCategory } from './Modules/reset-product-category';
import { showProductFileUpload } from './Modules/show-product-file-upload';
import { deleteProductImageUpload } from './Modules/delete-product-image-upload';
import { deleteProductVideoUpload } from './Modules/delete-product-video-upload';
import { addProductOption } from './Modules/add-product-option';
import { deleteProductOption } from './Modules/delete-product-option';
import CancelIcon from '@material-ui/icons/Cancel';

class SellingInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countryInput: '',            
            cityInput: '',
            addressInput: '',            
            productNameInput: '',
            productCategory: [],
            productFileUrl: [],
            productImage: [],
            productVideo: [],
            productImageUpload: [],
            productVideoUpload: [],
            productOption: [],
            productOptionInput: '',
            productPriceInput: '',
            productQuantityInput: '',
            productDescriptionInput: '',
            uploadProgress: '',
            showLoadingState: false
        }

        //APIs
        this.postProductDetail = this.postProductDetail.bind(this);
        this.editProductDetail = this.editProductDetail.bind(this);

        //Modules  
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeProductName = this.handleChangeProductName.bind(this);
        this.handleChangeProductCategory = this.handleChangeProductCategory.bind(this);
        this.resetProductCategory = this.resetProductCategory.bind(this);
        this.showProductFileUpload = this.showProductFileUpload.bind(this);
        this.deleteProductImageUpload = this.deleteProductImageUpload.bind(this);
        this.deleteProductVideoUpload = this.deleteProductVideoUpload.bind(this);
        this.handleChangeProductOption = this.handleChangeProductOption.bind(this);
        this.addProductOption = this.addProductOption.bind(this);
        this.deleteProductOption = this.deleteProductOption.bind(this);  
        this.handleChangeProductPrice = this.handleChangeProductPrice.bind(this);    
        this.handleChangeProductQuantity = this.handleChangeProductQuantity.bind(this); 
        this.handleChangeProductDescription = this.handleChangeProductDescription.bind(this);                
    }

    //APIs
    postProductDetail(event) {
        postProductDetail(this, event, this.props.storeInfo._id);
    }

    editProductDetail(event) {
        editProductDetail(this, event, this.props.productId, this.props.existedProductFile);
    }

    //Modules
    handleChangeCountry(event) {
        handleChange(this, event, 'countryInput');
    }

    handleChangeCity(event) {
        handleChange(this, event, 'cityInput');
    }

    handleChangeAddress(event) {
        handleChange(this, event, 'addressInput');
    }

    handleChangeProductName(event) {
        handleChange(this, event, 'productNameInput');
    }

    handleChangeProductCategory(event) {
        addProductCategory(this, event);
    }

    resetProductCategory() {
        resetProductCategory(this);
    }

    showProductFileUpload(event) {
        showProductFileUpload(this, event, 5);
    }

    deleteProductImageUpload(index) {
        deleteProductImageUpload(this, index);
    }

    deleteProductVideoUpload(index) {
        deleteProductVideoUpload(this, index);
    }

    handleChangeProductOption(event) {
        handleChange(this, event, 'productOptionInput');
    }

    addProductOption() {
        addProductOption(this);
    }

    deleteProductOption(index) {
        deleteProductOption(this, index);
    }

    handleChangeProductPrice(event) {
        handleChange(this, event, 'productPriceInput');
    }

    handleChangeProductQuantity(event) {
        handleChange(this, event, 'productQuantityInput');
    }

    handleChangeProductDescription(event) {
        handleChange(this, event, 'productDescriptionInput');
    }

    render() {
        var submitChoice;

        if(this.props.submitChoice === 'post') {
            submitChoice = this.postProductDetail;
        }
        if(this.props.submitChoice === 'edit') {
            submitChoice = this.editProductDetail;
        }

        return(
            <Fragment>
                <form onSubmit={ submitChoice }>
                    <div className='selling-submit-container'>
                        <p className='selling-submit-input__title'><b>1/ Name:</b></p>
                        <p className='selling-submit-input__note'>(Short & special name will easy to remember and search).</p>
                        <label>
                            <input
                                type='text'
                                placeholder='Ex: Basic Hoodie'                                                             
                                value={ this.state.productNameInput }
                                onChange={ this.handleChangeProductName }                                  
                                className='selling-submit__input input input-none-border input-none-border--focus' 
                            />
                        </label>
                    </div>                
                    <div className='selling-submit-container'>
                        <p className='selling-submit-input__title'><b>2/ Category:</b></p>
                        <p className='selling-submit-input__note'>(Right category for right searching).</p>
                        <div className='selling-category-choice-list'>
                            {
                                this.props.categoryList.map(item =>                                                
                                    <label key={ item.name } className='selling-category__choice'>
                                        <input 
                                            type='checkbox'
                                            value={ item.name }                                                                        
                                            disabled={ this.state.productCategory.length === 3 }
                                            onChange={ this.handleChangeProductCategory }                                                                                                      
                                            className='selling-category__checkbox'                                                                
                                        />
                                        <p className='selling-category__name'><b>{ item.name }</b></p>
                                    </label>                                                                                                     
                                )
                            }
                        </div>
                        <label className='selling-submit__edit-btn gray-btn btn btn--hover' onClick={ this.resetProductCategory }>   
                            <p><b>Reset</b></p>
                        </label>
                    </div>
                    <div className='selling-submit-container'>
                        <p className='selling-submit-input__title'><b>3/ Image / Video:</b></p>
                        <p className='selling-submit-input__note'>(Recommend for non-background / white-background image. Max size: 280 x 280 px | Short video (60 - 120s)).</p>
                        {
                            this.state.productImage.length > 0 ?
                            <div className='selling-product-file-list'>
                                {
                                    this.state.productImage.map((item, index) =>
                                        <div className='selling-submit-product-file-output'>
                                            <img src={ item } alt="sell-product" className='selling__product-file' />
                                            <label className='selling-submit-choice__cancel-btn selling-submit-choice__cancel-btn--hover' onClick={ () => this.deleteProductImageUpload(index) }>   
                                                <CancelIcon />
                                            </label>
                                        </div>                                                                 
                                    )
                                }
                            </div>:                
                            null 
                        }
                        {
                            this.state.productVideo.length > 0 ?
                            <div className='selling-product-file-list'>
                                {
                                    this.state.productVideo.map((item, index) =>
                                        <div className='selling-submit-product-file-output'>
                                            <video src={ item } className='selling__product-file' controls />
                                            <label className='selling-submit-choice__cancel-btn selling-submit-choice__cancel-btn--hover' onClick={() => this.deleteProductVideoUpload(index) }>   
                                                <CancelIcon />
                                            </label>
                                        </div>                                                                 
                                    )
                                }
                            </div>:                
                            null 
                        }
                        <label className='selling-submit__edit-btn gray-btn btn btn--hover' for='selling-submit-product-file-input'>   
                            <p><b>Upload</b></p>
                        </label>
                        <input 
                            type='file' 
                            accept='image/png, image/jpeg, image/jpg, video/*'
                            onChange={ this.showProductFileUpload }
                            multiple                         
                            id='selling-submit-product-file-input' 
                        />
                    </div>                                
                    <div className='selling-submit-container'>
                        <p className='selling-submit-input__title'><b>4/ Option:</b></p>
                        <p className='selling-submit-input__note'>(Add some options like size, color, ...).</p>
                        <div className='selling-submit-product-option-list'>
                            {
                                this.state.productOption.map((item, index) =>
                                    <div className='selling-submit-product-option-output'>
                                        <div className='selling__product-option selling-submit__product-option'>
                                            <p><b>{ item }</b></p>
                                        </div>
                                        <label className='selling-submit-choice__cancel-btn selling-submit-choice__cancel-btn--hover' onClick={() => this.deleteProductOption(index) }>   
                                            <CancelIcon />
                                        </label>
                                    </div>
                                )
                            }
                        </div>
                        <label>
                            <input
                                type='text'
                                placeholder='Ex: white - XL'                                                            
                                value={ this.state.productOptionInput }
                                onChange={ this.handleChangeProductOption }
                                className='selling-submit__input input input-none-border input-none-border--focus' 
                            />
                        </label>
                        <label className='selling-submit__edit-btn gray-btn btn btn--hover' onClick={ this.addProductOption }>   
                            <p><b>Add</b></p>
                        </label>                    
                    </div>        
                    <div className='selling-submit-container'>                    
                        <p className='selling-submit-input__title'><b>5/ Price:</b></p>
                        <p className='selling-submit-input__note'>(Using USD ($) for your product's price).</p>                    
                        <label>
                            <input
                                type='number'
                                placeholder='Ex: 20.00'                                                            
                                value={ this.state.productPriceInput }
                                onChange={ this.handleChangeProductPrice }
                                className='selling-submit__input input input-none-border input-none-border--focus' 
                            />
                        </label>
                    </div>                
                    <div className='selling-submit-container'>                    
                        <p className='selling-submit-input__title'><b>6/ Quantity:</b></p>                    
                        <p className='selling-submit-input__note'>(Number of your product will be sold).</p>                    
                        <label>
                            <input
                                type='number'
                                placeholder='Ex: 10'                                                            
                                min='0'
                                step='1'
                                value={ this.state.productQuantityInput }
                                onChange={ this.handleChangeProductQuantity }
                                className='selling-submit__input input input-none-border input-none-border--focus' 
                            />
                        </label>
                    </div>
                    <div className='selling-submit-container'>
                        <p className='selling-submit-input__title'><b>7/ Discription:</b></p>
                        <p className='selling-submit-input__note'>(Let customers know more about this product).</p>
                        <label>
                            <textarea
                                type='text'
                                placeholder='Ex: This is good for...'                                                            
                                value={ this.state.productDescriptionInput }
                                onChange={ this.handleChangeProductDescription }                                    
                                className='selling-submit__input input input-none-border input-none-border--focus' 
                            />
                        </label>
                    </div>
                    <div className='selling-submit-container'>
                        <p className='selling-submit-input__title'><b>8/ Address:</b></p>
                        <p className='selling-submit-input__note'>(Address for shipper to get your product).</p>
                        <div className='selling-submit-select-container'>
                            <div className='selling-submit__select'>
                                <p className='selling-submit-address__title'>Country:</p>                                                                        
                                <select value={ this.state.countryInput } onChange={ this.handleChangeCountry } className='select input input-none-border input-none-border--focus'>
                                    <option>...</option>
                                    {
                                        this.props.geoList.map(item => 
                                            <option value={ item.country } className='selling-submit__option'>{ item.country }</option>    
                                        )
                                    }
                                </select>                                                                                                                                                                                
                            </div>                            
                            <div className='selling-submit__select'>
                                {
                                    this.state.countryInput !== '' ?
                                    <div>
                                        {
                                            this.props.geoList.map(item =>
                                                <div>
                                                    {
                                                        item.country === this.state.countryInput ?
                                                        <div>
                                                            <p className='selling-submit-address__title'>City:</p>                                                                                                                    
                                                            <select value={ this.state.cityInput } onChange={ this.handleChangeCity } className='select input input-none-border input-none-border--focus'>
                                                                <option>...</option>
                                                                {
                                                                    item.city.map(city => 
                                                                        <option className='selling-submit__option'>{ city }</option>
                                                                    )
                                                                }
                                                            </select>
                                                        </div>:                                                                                                                                                                                                                            
                                                        null
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>:
                                    null
                                }
                            </div>
                        </div>
                        <p className='selling-submit-address__title'>Address:</p>
                        <label>
                            <input
                                type='text'
                                placeholder='Ex: 123/456, abc, de, f'                                                             
                                value={ this.state.addressInput }
                                onChange={ this.handleChangeAddress }                                  
                                className='selling-submit__input input input-none-border input-none-border--focus' 
                            />
                        </label>                                                
                    </div>
                    {
                        this.state.showLoadingState ?
                        <input 
                            type='submit' 
                            disabled
                            value={ `Saving...${ this.state.uploadProgress }%` }
                            className='selling-submit__save-button yellow-btn btn'
                        />:
                        <input 
                            type='submit' 
                            value='Save'
                            className='selling-submit__save-button yellow-btn btn btn--hover'
                        />
                    }
                </form>                
            </Fragment>
        );
    }
}

export default SellingInput;