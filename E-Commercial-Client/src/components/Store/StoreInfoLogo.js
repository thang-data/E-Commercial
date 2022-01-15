import React, { Fragment } from 'react';
import { updateStoreLogo } from './APIs/update-store-logo';
import { deleteStoreLogo } from './APIs/delete-store-logo';
import { showStoreLogoUpload } from './Modules/show-store-logo-upload';
import { deleteStoreLogoUpload } from './Modules/delete-store-logo-upload';
import CancelIcon from '@material-ui/icons/Cancel';

class StoreInfoLogo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logoImg: '',
            storeLogoInput: '',
            showUploadingLogoState: false,
            showDeletingLogoState: false,
            uploadProgress: ''
        }

        //APIs
        this.updateStoreLogo = this.updateStoreLogo.bind(this);
        this.deleteStoreLogo = this.deleteStoreLogo.bind(this);

        //Modules
        this.showStoreLogoUpload = this.showStoreLogoUpload.bind(this);        
        this.deleteStoreLogoUpload = this.deleteStoreLogoUpload.bind(this); 
    }

    //APIs
    updateStoreLogo() {
        updateStoreLogo(this, this.props.storeInfo._id);
    }

    deleteStoreLogo() {
        deleteStoreLogo(this, this.props.storeInfo._id);
    }

    //Modules
    showStoreLogoUpload(event) {        
        showStoreLogoUpload(this, event);        
    }

    deleteStoreLogoUpload() {
        deleteStoreLogoUpload(this);
    }

    render() {
        return(
            <Fragment>
                {
                    this.state.storeLogoInput !== '' ?
                    <div className='store-logo-manager-container'>
                        <img alt='store-logo' src={ this.state.storeLogoInput } className='store-logo__img store-logo-uploading-output' />
                        <label className='store-logo-uploading__cancel-btn store-logo-uploading__cancel-btn--hover' onClick={ this.deleteStoreLogoUpload }>   
                            <CancelIcon />
                        </label>
                        <div>
                            {
                                this.state.showUploadingLogoState ?
                                <div className='store-logo__update-btn white-btn btn'><p><b>Uploading...{ this.state.uploadProgress }%</b></p></div>:
                                <div className='store-logo__update-btn btn white-btn white-btn--hover' onClick={ this.updateStoreLogo }><p><b>Upload</b></p></div>                                
                            }
                        </div>
                    </div>:
                    <div>
                        {
                            this.props.storeInfo.logo !== '' ?
                            <div>
                                <img alt='store-logo' src={ this.props.storeInfo.logo } className='store-logo__img' />
                                <div>
                                    {
                                        this.state.showDeletingLogoState ?
                                        <div className='store-logo__update-btn store-logo__del-btn btn white-btn '><p><b>Deleting...</b></p></div>:
                                        <div className='store-logo__update-btn store-logo__del-btn btn white-btn white-btn--hover' onClick={ this.deleteStoreLogo }><p><b>Delete logo</b></p></div>                                                
                                    }
                                </div>
                            </div>:
                            <img alt='store-logo' src={ this.props.storeIcon } className='store-logo__img' />
                        }
                        <div>
                            {
                                this.state.showDeletingLogoState ?
                                null:
                                <div>
                                    <label className='store-logo__update-btn btn white-btn white-btn--hover' for='store-logo-uploading-input'><p><b>Choose new logo</b></p></label>                                                        
                                    
                                    <input 
                                        type='file' 
                                        accept='image/png, image/jpeg, image/jpg'
                                        onChange={ this.showStoreLogoUpload }
                                        id='store-logo-uploading-input' 
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

export default StoreInfoLogo;