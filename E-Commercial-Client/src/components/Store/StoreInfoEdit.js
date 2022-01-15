import React, { Fragment } from 'react';
import { editStoreInfo } from './APIs/edit-store-info';
import { handleChange } from '../../modules/input/handle-change';

class StoreInfoEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storeNameInput: '',
            storeEmailInput: '',
            storePhoneInput: '',
            storeAddressInput: '',
            showEditingInfoState: false,
        }

        //APIs
        this.editStoreInfo = this.editStoreInfo.bind(this);

        //Modules
        this.handleChangeStoreName = this.handleChangeStoreName.bind(this);
        this.handleChangeStoreEmail = this.handleChangeStoreEmail.bind(this);
        this.handleChangeStorePhone = this.handleChangeStorePhone.bind(this);
        this.handleChangeStoreAddress = this.handleChangeStoreAddress.bind(this);
    }

    //APIs
    editStoreInfo(event) {
        editStoreInfo(this, event, this.props.storeInfo._id);
    }

    //Modules
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
                <form onSubmit={ this.editStoreInfo } className='store-info-editor-container'>
                    <label>
                        <input
                            type='text'
                            placeholder='Edit name'
                            value={ this.state.storeNameInput } 
                            onChange={ this.handleChangeStoreName }                                                                                                                                                                                                                    
                            className='store-info-editor__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label>
                        <input
                            type='email'
                            placeholder='Edit email'
                            value={ this.state.storeEmailInput } 
                            onChange={ this.handleChangeStoreEmail }                                                                                                                                                                                                                     
                            className='store-info-editor__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label>
                        <input
                            type='tel'
                            placeholder='Edit phone'
                            value={ this.state.storePhoneInput } 
                            onChange={ this.handleChangeStorePhone }                                                                                                                                                                                                                      
                            className='store-info-editor__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label>
                        <input
                            type='tel'
                            placeholder='Edit address'
                            value={ this.state.storeAddressInput } 
                            onChange={ this.handleChangeStoreAddress }                                                                                                                                                                                                                      
                            className='store-info-editor__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    {
                        this.state.showEditingInfoState ?
                        <input 
                            type='submit'
                            disabled
                            value='Saving...'
                            className='store-info__edit-btn yellow-btn btn'
                        />:
                        <input 
                            type='submit'
                            value='Save'
                            className='store-info__edit-btn yellow-btn btn btn--hover'
                        />
                    }                                                                                                                                                                                                                                    
                </form>
            </Fragment>
        );
    }
}

export default StoreInfoEdit;