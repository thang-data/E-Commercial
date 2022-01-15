import React, { Fragment } from 'react';
import { showAccountAvatarUpload } from './Modules/show-account-avatar-upload';
import { updateAccountAvatar } from './APIs/update-account-avatar';
import { deleteAccountAvatarUpload } from './Modules/delete-account-avatar-upload';
import { deleteAccountAvatar } from './APIs/delete-account-avatar';
import CancelIcon from '@material-ui/icons/Cancel';

class AccountInfoAvatar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadProgress: '',
            accountEmailInput: '',            
            accountAvatarInput: '',
            avatarImg: '',            
            showUploadingAvatarState: false,
            showDeletingAvatarState: false,
        }

        //APIs
        this.updateAccountAvatar = this.updateAccountAvatar.bind(this);
        this.deleteAccountAvatar = this.deleteAccountAvatar.bind(this);

        //Modules
        this.showAccountAvatarUpload = this.showAccountAvatarUpload.bind(this);
        this.deleteAccountAvatarUpload = this.deleteAccountAvatarUpload.bind(this);
    }

    //APIs
    updateAccountAvatar() {
        updateAccountAvatar(this, this.props.accountInfo._id);
    }

    deleteAccountAvatar() {
        deleteAccountAvatar(this);
    }

    //Modules
    showAccountAvatarUpload(event) {
        showAccountAvatarUpload(this, event);
    }

    deleteAccountAvatarUpload() {
        deleteAccountAvatarUpload(this);
    }

    render() {
        return(
            <Fragment>
                {
                    this.state.accountAvatarInput !== '' ?
                    <div className='account-avatar-manager-container'>                        
                        <img alt='account-avatar' src={ this.state.accountAvatarInput } className='account-avatar__img account-avatar-uploading-output' />
                        <label className='account-avatar-uploading__cancel-btn account-avatar-uploading__cancel-btn--hover' onClick={ this.deleteAccountAvatarUpload }>   
                            <CancelIcon />
                        </label>
                        {
                            this.state.showUploadingAvatarState ?
                            <div className='account-avatar__update-btn white-btn btn'><p><b>Uploading...{ this.state.uploadProgress }%</b></p></div>:
                            <div className='account-avatar__update-btn btn white-btn white-btn--hover' onClick={ this.updateAccountAvatar }><p><b>Upload</b></p></div>                                
                        }                                                
                    </div>:                                         
                    <div>
                        {
                            this.props.accountInfo.avatar !== '' ?
                            <div>                                
                                <img alt='account-avatar' src={ this.props.accountInfo.avatar } className='account-avatar__img' />                                
                                {
                                    this.state.showDeletingAvatarState ?
                                    <div className='account-avatar__update-btn account-avatar__del-btn white-btn btn'><p><b>Deleting...</b></p></div>:
                                    <div>
                                        {
                                            this.props.showChangePasswordInput ?
                                            null:
                                            <div className='account-avatar__update-btn account-avatar__del-btn white-btn btn white-btn--hover' onClick={ this.deleteAccountAvatar }><p><b>Delete avatar</b></p></div>
                                        }
                                    </div>                                        
                                }                                
                            </div>:                                                                
                            <img alt='account-avatar' src={ this.props.accountIcon } className='account-avatar__img' />
                        }
                        <div>                            
                            {
                                this.state.showDeletingAvatarState ?
                                null:
                                <div>
                                    <label className='account-avatar__update-btn white-btn btn white-btn--hover' for='account-avatar-uploading-input'><p><b>Choose new avatar</b></p></label>                                            
                                    <input 
                                        type='file' 
                                        accept='image/png, image/jpeg, image/jpg'
                                        onChange={ this.showAccountAvatarUpload }
                                        id='account-avatar-uploading-input' 
                                    />
                                </div>
                            }                                                    
                        </div>
                    </div>
                }
            </Fragment>
        );
    }
}

export default AccountInfoAvatar;