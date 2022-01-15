import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { showChangePasswordInput } from './Modules/show-change-password-input';
import { changeAccountPassword } from './APIs/change-account-password';
import { handleChange } from '../../modules/input/handle-change';
import { editAccountInfo } from './APIs/edit-account-info';
import { signOut } from './Modules/sign-out';

class AccountInfoEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accountNameInput: '',
            accountEmailInput: '',
            accountPhoneInput: '',
            accountOldPasswordInput: '',
            accountNewPasswordInput: '',
            accountNewPasswordAgainInput: '',
            showChangePasswordInput: false,            
            showEditingInfoState: false,
            showChangingPasswordState: false, 
        }

        //APIs
        this.changeAccountPassword = this.changeAccountPassword.bind(this);   
        this.editAccountInfo = this.editAccountInfo.bind(this); 

        //Modules
        this.handleChangeAccountName = this.handleChangeAccountName.bind(this);
        this.handleChangeAccountEmail = this.handleChangeAccountEmail.bind(this);
        this.handleChangeAccountPhone = this.handleChangeAccountPhone.bind(this);
        this.handleChangeAccountOldPassword = this.handleChangeAccountOldPassword.bind(this);
        this.handleChangeAccountNewPassword = this.handleChangeAccountNewPassword.bind(this);
        this.handleChangeAccountNewPasswordAgain = this.handleChangeAccountNewPasswordAgain.bind(this);
        this.showChangePasswordInput = this.showChangePasswordInput.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    //APIs    
    changeAccountPassword() {
        changeAccountPassword(this);
    }

    editAccountInfo(event) {
        editAccountInfo(this, event, this.props.accountInfo._id);
    }

    //Modules        
    handleChangeAccountName(event) {
        handleChange(this, event, 'accountNameInput');
    }

    handleChangeAccountEmail(event) {
        handleChange(this, event, 'accountEmailInput');
    }

    handleChangeAccountPhone(event) {
        handleChange(this, event, 'accountPhoneInput');
    }

    handleChangeAccountOldPassword(event) {
        handleChange(this, event, 'accountOldPasswordInput');
    }

    handleChangeAccountNewPassword(event) {
        handleChange(this, event, 'accountNewPasswordInput');
    }

    handleChangeAccountNewPasswordAgain(event) {
        handleChange(this, event, 'accountNewPasswordAgainInput');
    }

    showChangePasswordInput() {
        showChangePasswordInput(this);
    }

    signOut() {
        signOut(this);
    }

    render() {
        return(
            <Fragment>
                <form onSubmit={ this.editAccountInfo } className='account-info-editor-container'>
                    {
                        this.state.showChangePasswordInput ?
                        null:
                        <div>
                            <label>
                                <input
                                    type='text'
                                    placeholder='Edit name'
                                    value={ this.state.accountNameInput } 
                                    onChange={ this.handleChangeAccountName }                                                                                                                                                                                                                                        
                                    className='account-info-editor__input input-with-border input input-none-border--focus' 
                                />
                            </label>
                            <label>
                                <input
                                    type='email'
                                    placeholder='Edit email'
                                    value={ this.state.accountEmailInput } 
                                    onChange={ this.handleChangeAccountEmail }                                                                                                                                                                                                             
                                    className='account-info-editor__input input-with-border input input-none-border--focus' 
                                />
                            </label>
                            <label>
                                <input
                                    type='tel'
                                    placeholder='Edit phone'
                                    value={ this.state.accountPhoneInput } 
                                    onChange={ this.handleChangeAccountPhone }                                                                                                                                                                                                              
                                    className='account-info-editor__input input-with-border input input-none-border--focus' 
                                />
                            </label>
                        </div>
                    }                    
                    {
                        this.state.showChangePasswordInput ?
                        <div>
                            <label>
                                <input
                                    type='password'
                                    placeholder='Old password'
                                    value={ this.state.accountOldPasswordInput } 
                                    onChange={ this.handleChangeAccountOldPassword }                                                                                                                                                                                                              
                                    className='account-info-editor__input input-with-border input input-none-border--focus' 
                                />
                            </label>
                            <label>
                                <input
                                    type='password'
                                    placeholder='New password'
                                    value={ this.state.accountNewPasswordInput } 
                                    onChange={ this.handleChangeAccountNewPassword }                                                                                                                                                                                                              
                                    className='account-info-editor__input input-with-border input input-none-border--focus' 
                                />
                            </label>
                            <label>
                                <input
                                    type='password'
                                    placeholder='New password again'
                                    value={ this.state.accountNewPasswordAgainInput } 
                                    onChange={ this.handleChangeAccountNewPasswordAgain }                                                                                                                                                                                                              
                                    className='account-info-editor__input input-with-border input input-none-border--focus' 
                                />
                            </label>
                        </div>:                        
                        null
                    }
                    {
                        this.state.showEditingInfoState ?
                        <input 
                            type='submit'
                            value='Saving...'      
                            disabled                      
                            className='account-info__edit-btn yellow-btn btn'
                        />:
                        <div>
                            {
                                this.state.showChangePasswordInput ?
                                <div>
                                    {
                                        this.state.showChangingPasswordState ?
                                        <div className='account-info__save-password-btn white-btn btn'><p><b>Saving...</b></p></div>:
                                        <div className='account-info-editor-option'>
                                            <div className='account-info__save-password-btn btn white-btn white-btn--hover' onClick={ this.changeAccountPassword }><p><b>Save new password</b></p></div>
                                            <div className='account-info__cancel-change-password-btn txt-btn txt-btn-underline--hover' onClick={ this.showChangePasswordInput }><p><b>Cancel</b></p></div>
                                        </div>
                                    }                                            
                                </div>:
                                <div className='account-info-editor-option'>
                                    <input 
                                        type='submit'
                                        value='Save'                            
                                        className='account-info__edit-btn yellow-btn btn btn--hover'
                                    />
                                    <div className='account-info__change-password-btn btn white-btn white-btn--hover' onClick={ this.showChangePasswordInput }><p><b>Change password</b></p></div>
                                    <div className='sign-out-btn gray-btn btn btn--hover' onClick={ this.signOut }>
                                        <p><b>Sign out</b></p>                                                                                                                                                                                                                                                                
                                    </div>
                                </div>
                            }                                    
                        </div>
                    }                                                        
                </form>
            </Fragment>
        );
    }
}

export default withRouter(AccountInfoEdit);