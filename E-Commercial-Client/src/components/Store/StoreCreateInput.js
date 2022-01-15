import React, { Fragment } from 'react';
import { createStore } from './APIs/create-store';
import { handleChange } from '../../modules/input/handle-change';
import { showStoreLogoUpload } from './Modules/show-store-logo-upload';
import { deleteStoreLogoUpload } from './Modules/delete-store-logo-upload';
import StoreCreateLogo from './StoreCreateLogo';

class StoreCreateInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logoImg: '',
            storeLogoInput: '', 
            storeNameInput: '',
            storeEmailInput: '',
            storePhoneInput: '',
            storeAddressInput: '',
            showCreatingStoreState: false,
            uploadProgress: '' 
        }

        //APIs
        this.createStore = this.createStore.bind(this);

        //Modules
        this.showStoreLogoUpload = this.showStoreLogoUpload.bind(this);
        this.deleteStoreLogoUpload = this.deleteStoreLogoUpload.bind(this); 
        this.handleChangeStoreName = this.handleChangeStoreName.bind(this);
        this.handleChangeStoreEmail = this.handleChangeStoreEmail.bind(this);
        this.handleChangeStorePhone = this.handleChangeStorePhone.bind(this);
        this.handleChangeStoreAddress = this.handleChangeStoreAddress.bind(this);
    }

    //APIs
    createStore(event) {
        createStore(this, event, this.props.accountInfo._id);
    }

    //Modules
    showStoreLogoUpload(event) {        
        showStoreLogoUpload(this, event);        
    }

    deleteStoreLogoUpload() {
        deleteStoreLogoUpload(this);
    }

    handleChangeStoreName(event) {
        handleChange(this, event, 'storeNameInput');
    }

    handleChangeStoreEmail(event) {
        handleChange(this, event, 'storeEmailInput');
    }

    handleChangeStorePhone(event) {
        handleChange(this, event, 'storePhoneInput');
    }

    handleChangeStoreAddress(event) {
        handleChange(this, event, 'storeAddressInput');
    }

    render() {
        return(
            <Fragment>
                <form onSubmit={ this.createStore }>
                    <StoreCreateLogo 
                        storeLogoInput={ this.state.storeLogoInput }
                        showStoreLogoUpload={ this.showStoreLogoUpload }
                        deleteStoreLogoUpload={ this.deleteStoreLogoUpload }                                                                                      
                    />
                    <div className='store-creator-container'>
                        <p className='store-creator__title'><b>Name:</b></p>
                        <p className='store-creator__note'>(Short & special name will easy to remember and search).</p>
                        <label>
                            <input
                                type='text'
                                placeholder='Ex: vShop'
                                value={ this.state.storeNameInput } 
                                onChange={ this.handleChangeStoreName }                                                                                                                                                
                                className='store-creator__input input input-none-border input-none-border--focus' 
                            />
                        </label>
                    </div>
                    <div className='store-creator-container'>
                        <p className='store-creator__title'><b>Email:</b></p>                    
                        <p className='store-creator__note'>(Email of your store for contacting).</p>
                        <label>
                            <input
                                type='email'
                                placeholder='Ex: vshop@gmail.com'
                                value={ this.state.storeEmailInput } 
                                onChange={ this.handleChangeStoreEmail }                                                                                                                                                  
                                className='store-creator__input input input-none-border input-none-border--focus' 
                            />
                        </label>
                    </div>
                    <div className='store-creator-container'>
                        <p className='store-creator__title'><b>Phone:</b></p>                
                        <p className='store-creator__note'>(Phone number of your store for contacting).</p>
                        <label>
                            <input
                                type='tel'
                                placeholder='Ex: 090123456'                                                             
                                value={ this.state.storePhoneInput } 
                                onChange={ this.handleChangeStorePhone }                                                                                      
                                className='store-creator__input input input-none-border input-none-border--focus' 
                            />
                        </label>
                    </div>
                    <div className='store-creator-container'>
                        <p className='store-creator__title'><b>Address:</b></p>                    
                        <p className='store-creator__note'>(Optional. If you have a real store, provide it's address).</p>
                        <label>
                            <input
                                type='text'
                                placeholder='Ex: 123/456, abc, de, f'                                                             
                                value={ this.state.storeAddressInput } 
                                onChange={ this.handleChangeStoreAddress }                                                                                      
                                className='store-creator__input input input-none-border input-none-border--focus' 
                            />
                        </label>
                    </div>
                    <div className='store-creator-container'>
                        {
                            this.state.showCreatingStoreState ?
                            <div className='loading-wrapper'>
                                {
                                    this.props.logoImg !== '' ?
                                    <input 
                                        type='submit'
                                        disabled 
                                        value={ `Creating...${ this.state.uploadProgress }%` }                                            
                                        className='store-creator__submit-btn yellow-btn btn' 
                                    />:
                                    <input 
                                        type='submit'
                                        disabled 
                                        value='Creating...'                                           
                                        className='store-creator__submit-btn yellow-btn btn btn--hover' 
                                    />                                
                                }                                                    
                            </div>:
                            <input 
                                type='submit' 
                                value='Post'                                            
                                className='store-creator__submit-btn yellow-btn btn btn--hover' 
                            />
                        }
                    </div>
                </form>                    
            </Fragment>
        );
    }
}

export default StoreCreateInput;