import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { context } from '../Context/Context';
import { Link, withRouter } from 'react-router-dom';
import { deleteProduct } from './APIs/delete-product';
import { editProductShow } from './Modules/edit-product-show';
import { showProductFileUpload } from './Modules/show-product-file-upload';
import { deleteProductImageUpload } from './Modules/delete-product-image-upload';
import { deleteProductVideoUpload } from './Modules/delete-product-video-upload';
import { deleteProductOption } from './Modules/delete-product-option';
import { handleChange } from '../../modules/input/handle-change';
import { addProductOption } from './Modules/add-product-option';
import { addProductCategory } from './Modules/add-product-category';
import { resetProductCategory } from './Modules/reset-product-category';
import { deleteProductDetail } from './APIs/delete-product-detail';
import { addProductOptionShow } from './Modules/add-product-option-show';
import { addProductCategoryShow } from './Modules/add-product-category-show';
import { addProductDetail } from './APIs/add-product-detail';
import SellingInput from './SellingInput';
import SellingOrderList from './SellingOrderList';
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

class SellingProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            productNameInput: '',
            productImage: [],
            productImageUpload: [],            
            productVideoUpload: [],
            productFileUrl: [],
            productOptionInput: '',
            productOption: [],
            productPriceInput: '',            
            productQuantityInput: '',
            productCategory: [],
            productDescriptionInput: '',
            addProductOption: false,
            addProductCategory: false,
            uploadProgress: '',
            showLoadingState: false
        }

        //APIs
        this.addProductDetail = this.addProductDetail.bind(this);        
        this.deleteProductDetail = this.deleteProductDetail.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        
        //Modules
        this.editProductShow = this.editProductShow.bind(this);                
        this.addProductOptionShow = this.addProductOptionShow.bind(this);
        this.addProductCategoryShow = this.addProductCategoryShow.bind(this);
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
        this.resetProductCategory = this.resetProductCategory.bind(this);
    }

    //APIs
    addProductDetail(stateName, field) {
        addProductDetail(this, this.props.product._id, stateName, field);
    }    

    deleteProductDetail(field, where) {
        deleteProductDetail(this, this.props.product._id, field, where);
    }

    deleteProduct() {
        deleteProduct(this, this.props.storeInfo._id, this.props.product._id);
    }
   
    //Modules
    editProductShow() {
        editProductShow(this);
    }

    addProductOptionShow() {
        addProductOptionShow(this);
    }

    addProductCategoryShow() {
        addProductCategoryShow(this);
        resetProductCategory(this);
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

    resetProductCategory() {
        resetProductCategory(this);
    }

    render() {
        return(
            <Fragment>
                <context.Consumer>
                    {
                        (context) =>
                        <div className='selling-list-container'>
                            <p><u><Link to={ `/product/detail/view/${ this.props.product._id }` } className='selling-list__product-link'>{ this.props.product._id } / { this.props.product.time } / <b>{ this.props.product.name }</b></Link></u></p>                            
                            <div className='selling-product-file-list'>
                                {
                                    this.props.product.file.map((file, index) =>
                                        <div>
                                            {
                                                file.type === 'image' ?                                                
                                                <img alt='sell-product' src={ file.url } className='selling__product-file' />:
                                                <video src={ file.url } className='selling__product-file' controls />
                                            }                                            
                                            {
                                                this.props.product.file.length > 1 ?
                                                <p className='txt-btn txt-btn-paler--hover' onClick={ () => this.deleteProductDetail('file', index) }><b>Delete</b></p>:                                                
                                                null
                                            }
                                        </div>                                                                                                                                         
                                    )
                                }                                
                            </div>                                                                                                                                                            
                            <p><b>Name:&emsp;<span className='selling-list__product-info'>{ this.props.product.name }</span></b></p><br /><br />                            
                            <p><b>Category:&emsp;{ 
                                this.props.product.category.map((category, index) => <span className='selling-list__product-info'> { category } 
                                { this.props.product.category.length > 1 ? 
                                    <CancelIcon className='selling-list-choice__cancel-btn selling-list-choice__cancel-btn--hover' onClick={ () => this.deleteProductDetail('category', index) } />: 
                                    null 
                                } |</span>) 
                            }</b>
                                <span>
                                    {
                                        this.state.addProductCategory ?
                                        <div>
                                            <div className='selling-category-choice-list'>
                                                {
                                                    context.categoryList.map(item =>                                                
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
                                            <div className='selling-list-option-container'>
                                                <p className='txt-btn txt-btn-paler--hover' onClick={ this.resetProductCategory }><b>Reset</b></p>
                                                <p className='txt-btn txt-btn-paler--hover' onClick={ () => { this.addProductDetail('productCategory', 'category') } }><b>&emsp;Save</b></p>
                                                <p className='txt-btn txt-btn-paler--hover' onClick={ this.addProductCategoryShow }><b>&emsp;Cancel</b></p>                   
                                            </div>
                                        </div>:                                                                               
                                        <AddCircleOutlineIcon className='selling-list-choice__add-btn selling-list-choice__add-btn--hover' onClick={ this.addProductCategoryShow } />
                                    }
                                </span>
                            </p><br /><br />                                                                                                                                                                    
                            <p><b>Option:&emsp;{ 
                                this.props.product.option.map((option, index) => <span className='selling-list__product-info'> { option } 
                                <CancelIcon className='selling-list-choice__cancel-btn selling-list-choice__cancel-btn--hover' onClick={ () => this.deleteProductDetail('option', index) } /> |</span>) 
                            }</b>
                                <span>
                                    {
                                        this.state.addProductOption ?
                                        <div>
                                            <div className='selling__list-product-info-option-wrapper'>                                            
                                                <input
                                                    type='text'
                                                    placeholder='Add your product option'                                                            
                                                    value={ this.state.productOptionInput }
                                                    onChange={ this.handleChangeProductOption }
                                                    className='selling-submit__input input input-none-border input-none-border--focus' 
                                                />                                                                                                                                    
                                                
                                            </div>
                                            <div className='selling-list-option-container'>
                                                <p className='txt-btn txt-btn-paler--hover' onClick={ () => { this.addProductDetail('productOptionInput', 'option') } }><b>Save</b></p>
                                                <p className='txt-btn txt-btn-paler--hover' onClick={ this.addProductOptionShow }><b>&emsp;Cancel</b></p>
                                            </div>
                                        </div>:                                                                            
                                        <AddCircleOutlineIcon className='selling-list-choice__add-btn selling-list-choice__add-btn--hover' onClick={ this.addProductOptionShow } />
                                    }                                                                
                                </span>
                            </p><br /><br />                            
                            <p><b>Price:&emsp;<span className='selling-list__product-info'>${ this.props.product.price }</span></b></p><br /><br />                                               
                            <p><b>Quantity:&emsp;<span className='selling-list__product-info'>{ this.props.product.quantity }</span></b></p><br /><br />                            
                            <p><b>Description:&emsp;<span className='selling-list__product-info selling-list__product-description'>{ this.props.product.description }
                                {
                                    this.props.product.description !== '' ?
                                    <CancelIcon className='selling-list-choice__cancel-btn selling-list-choice__cancel-btn--hover' onClick={ () => this.deleteProductDetail('description', null) } />:
                                    null
                                }
                            </span></b></p><br /><br />
                            <p><b>Address:&emsp;<span className='selling-list__product-info'>{ this.props.product.address[2] }, { this.props.product.address[1] }, { this.props.product.address[0] }</span></b></p>
                            {
                                this.props.order.length > 0 ?
                                <div>                                    
                                    <br /><br /><p><b>Order list:</b></p>
                                    <hr className='horizontal-line' />
                                    <SellingOrderList orderList={ this.props.order } />                                    
                                </div>:                                                                
                                null
                            }
                            {
                                this.state.edit ?
                                <div className='selling-list-edit__cancel-btn gray-btn btn btn--hover' onClick={ this.editProductShow }><p><b>Cancel</b></p></div>:
                                <div>
                                    {
                                        this.state.showLoadingState ?
                                        <input 
                                            type='submit'
                                            disabled
                                            value='Deleting...'
                                            className='gray-btn btn'
                                        />:                                        
                                        <div className='selling-list-option-container'>
                                            <div className='gray-btn btn btn--hover' onClick={ this.editProductShow }><p><b>Edit</b></p></div>
                                            <div className='selling-list-product__del-btn gray-btn btn btn--hover' onClick={ this.deleteProduct }><p><b>Delete</b></p></div>                                            
                                        </div>
                                    }                                    
                                </div>                            
                            }                                               
                            {
                                this.state.edit ?
                                <SellingInput 
                                    categoryList={ context.categoryList } 
                                    storeInfo={ this.props.storeInfo } 
                                    productId={ this.props.product._id } 
                                    existedProductFile={ this.props.product.file }
                                    geoList={ context.geoList }
                                    submitChoice='edit'                                     
                                />:                                
                                null
                            }
                            <hr />                                                                                                                                                                
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

export default connect(mapStateToProps)(withRouter(SellingProductList));