import React, { Fragment } from 'react';
import './Order.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postOrderDetail } from './APIs/post-order-detail';
import { handleChange } from '../../modules/input/handle-change';
import { handleChangeProductOption } from './Modules/handle-change-product-option';
import { handleChangeCityInput } from './Modules/handle-change-city-input';
import { addQuantity } from './Modules/add-quantity';
import { minusQuantity } from './Modules/minus-quantity';
import OrderProductDetail from './OrderProductDetail';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            nameInput: '',
            phoneInput: '',
            countryInput: '',
            cityInput: '',
            addressInput: '',
            optionInput: '',
            quantityInput: 1,
            shippingCost: 0,
            productCost: this.props.productDetail.price,                        
            showLoadingState: false
        }

        //APIs
        this.postOrderDetail = this.postOrderDetail.bind(this);

        //Modules
        this.handleChangeNameInput = this.handleChangeNameInput.bind(this);
        this.handleChangePhoneInput = this.handleChangePhoneInput.bind(this);
        this.handleChangeCountryInput = this.handleChangeCountryInput.bind(this);
        this.handleChangeCityInput = this.handleChangeCityInput.bind(this);
        this.handleChangeAddressInput = this.handleChangeAddressInput.bind(this);
        this.handleChangeProductOption = this.handleChangeProductOption.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.minusQuantity = this.minusQuantity.bind(this);
    }

    //APIs
    postOrderDetail(event) {
        postOrderDetail(this, event, this.props.accountInfo._id, this.props.productDetail._id, this.props.productDetail.option);
    }

    //Modules
    handleChangeNameInput(event) {
        handleChange(this, event, 'nameInput');
    }

    handleChangePhoneInput(event) {
        handleChange(this, event, 'phoneInput');
    }

    handleChangeCountryInput(event) {
        handleChange(this, event, 'countryInput');
    }

    handleChangeCityInput(event) {
        handleChangeCityInput(this, event);        
    }

    handleChangeAddressInput(event) {
        handleChange(this, event, 'addressInput');
    }

    handleChangeProductOption(productOption) {
        handleChangeProductOption(this, productOption);
    }

    addQuantity(existedQuantity) {
        addQuantity(this, existedQuantity);
    }

    minusQuantity() {
        minusQuantity(this);
    }

    render() {        
        return(
            <Fragment>
                <div className='order-container'>
                    <CloseIcon onClick={ this.props.showOrderForm } className='order__close-icon order__close-icon--hover' />
                    <div className='order-inner'>
                        <div className='order-form-container'>
                            <p className='order__vshop-name'><b>vShop</b><span><LocalMallIcon className='order__vshop-icon' /></span></p>
                            <hr className='horizontal-line' />
                            <OrderProductDetail productDetail={ this.props.productDetail } />
                            <hr className='horizontal-line' />                            
                            <form onSubmit={ this.postOrderDetail }>
                                <div className='order-detail-container'>
                                    <p><b>1/ Receiver name&ensp;</b><i>(Give your name here)</i>:</p>                                    
                                    <label>
                                        <input
                                            type='text'
                                            placeholder='Ex: Tony'                                                             
                                            value={ this.state.nameInput }
                                            onChange={ this.handleChangeNameInput }                                  
                                            className='order-detail__input input input-none-border input-none-border--focus' 
                                        />
                                    </label>
                                </div>
                                <div className='order-detail-container'>
                                    <p><b>2/ Phone number&ensp;</b><i>(Give your phone number for contacting with shipper and seller):</i></p>                                    
                                    <label>
                                        <input
                                            type='tel'
                                            placeholder='Ex: 09xxxxxxxxxx'                                                             
                                            value={ this.state.phoneInput }
                                            onChange={ this.handleChangePhoneInput }                                  
                                            className='order-detail__input input input-none-border input-none-border--focus' 
                                        />
                                    </label>
                                </div>
                                <div className='order-detail-container'>
                                    <p><b>3/ Address&ensp;</b><i>(The address you will receive this product):</i></p>                                                                     
                                    <div className='order-detail-select-container'>
                                        <div className='order-detail-address__select'>
                                            <p className='order-detail-address__title'>Country:</p>                                                                        
                                            <select value={ this.state.countryInput } onChange={ this.handleChangeCountryInput } className='select input input-none-border input-none-border--focus'>
                                                <option>...</option>
                                                {
                                                    this.props.geoList.map(item => 
                                                        <option value={ item.country } className='order-detail-address__option'>{ item.country }</option>    
                                                    )
                                                }
                                            </select>                                                                                                                                                                                
                                        </div>                            
                                        <div className='order-detail-address__select'>
                                            {
                                                this.state.countryInput !== '' ?
                                                <div>
                                                    {
                                                        this.props.geoList.map(item =>
                                                            <div>
                                                                {
                                                                    item.country === this.state.countryInput ?
                                                                    <div>
                                                                        <p className='order-detail-address__title'>City:</p>                                                                                                                    
                                                                        <select value={ this.state.cityInput } onChange={ this.handleChangeCityInput } className='select input input-none-border input-none-border--focus'>
                                                                            <option>...</option>
                                                                            {
                                                                                item.city.map(city => 
                                                                                    <option className='order-detail-address__option'>{ city }</option>
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
                                    <p className='order-detail-address__title'>Address:</p>
                                    <label>
                                        <input
                                            type='text'
                                            placeholder='Ex: 123/456, abc, de, f'                                                             
                                            value={ this.state.addressInput }
                                            onChange={ this.handleChangeAddressInput }                                  
                                            className='order-detail__input input input-none-border input-none-border--focus' 
                                        />
                                    </label>
                                </div>
                                {
                                    this.props.productDetail.option.length > 0 ?
                                    <div className='order-detail-container'>
                                        <p><b>4/ Option&ensp;</b><span><i>(Choose the option on this product):</i></span></p>                                        
                                        <br /><p>Your choice:&emsp;<span><b><i>{ this.state.optionInput }</i></b></span></p>
                                        <div className='order-detail-option-list'>
                                            {
                                                this.props.productDetail.option.map(item => 
                                                    <div className='order-detail__option order-detail__option--hover' onClick={ () => this.handleChangeProductOption(item) }><p>{ item }</p></div>
                                                )
                                            }
                                        </div>                                        
                                    </div>:
                                    null
                                }
                                <div className='order-detail-container'>
                                    <p><b>5/ Quantity&ensp;</b><i>(Number of items you want to buy)</i>:</p>
                                    <div className='order-detail-quantity'>
                                        <br /><p>
                                            Number of items:&emsp;
                                            <span><b>{ this.state.quantityInput } <i>item(s)&emsp;</i></b></span>                                            
                                        </p>
                                        <div className='order-detail-quantity__change-btn order-detail-quantity__change-btn--hover' onClick={ () => this.addQuantity(this.props.productDetail.quantity) }><AddIcon className='order-detail-quantity__change-icon' /></div>
                                        <div className='order-detail-quantity__change-btn order-detail-quantity__change-btn--hover' onClick={ this.minusQuantity }><RemoveIcon className='order-detail-quantity__change-icon' /></div>
                                    </div>                                                                        
                                </div>
                                <hr className='horizontal-line' />
                                <p className='order-detail-cost'><b>Price:&emsp;</b><span><b className='order-detail-cost__value'>${ this.state.productCost }</b></span></p>
                                <p className='order-detail-cost'><b>Shipping cost:&emsp;</b><span><b className='order-detail-cost__value'>${ this.state.shippingCost }</b></span></p>                                                             
                                <p className='order-detail-total-cost'><b>Total:&emsp;</b><span><b className='order-detail-total-cost__value'>${ this.state.productCost + this.state.shippingCost }</b></span></p>
                                {
                                    this.state.showLoadingState ?
                                    <input 
                                        type='submit'
                                        disabled
                                        value='Sending...'
                                        className='yellow-btn btn btn--hover'
                                    />:
                                    <input 
                                        type='submit'
                                        value='Send'
                                        className='yellow-btn btn btn--hover'
                                    />
                                }                            
                            </form>                            
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(withRouter(Order));