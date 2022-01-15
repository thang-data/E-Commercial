
import React, { Fragment } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

class StoreCreateLogo extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='store-creator-container'>                                                    
                    <p className='store-creator__title'><b>Logo:</b></p>                    
                    <p className='store-creator__note'>(Optional. You should have a logo. size: 85 x 85 px).</p>
                    {
                        this.props.storeLogoInput !== '' ?
                        <div className='store-logo-manager-container'>
                            <img alt='store-logo' src={ this.props.storeLogoInput } className='store-logo__img store-logo-uploading-output' />
                            <label className='store-logo-uploading__cancel-btn store-logo-uploading__cancel-btn--hover' onClick={ this.props.deleteStoreLogoUpload }>   
                                <CancelIcon />
                            </label>
                        </div>:                                                
                        null
                    }
                    <label className='store-logo__upload-btn gray-btn btn btn--hover' for='store-logo-uploading-input'>   
                        <p><b>Upload</b></p>
                    </label>                                                                                
                    <input 
                        type='file' 
                        accept='image/png, image/jpeg, image/jpg'
                        onChange={ this.props.showStoreLogoUpload }
                        id='store-logo-uploading-input' 
                    />
                </div>
            </Fragment>
        );
    }
}

export default StoreCreateLogo;