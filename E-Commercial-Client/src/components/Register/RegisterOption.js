import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

class RegisterOption extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='sign-option-container'>
                    {
                        this.props.showLoadingState ?
                        <input 
                            type='submit' 
                            value='Sending...' 
                            disabled
                            className='sign__submit-btn yellow-btn btn btn--hover' 
                        />:
                        <input 
                            type='submit' 
                            value='Send' 
                            className='sign__submit-btn yellow-btn btn btn--hover' 
                        />
                    }                    
                    <p className='sign-option__vertical-line'><b>|</b></p>
                    <div className='social-network-calling-container'>                        
                        <div className='social-network__logo social-network__logo--hover'>
                            <GoogleIcon />
                        </div>                        
                        <div className='social-network__logo social-network__logo--hover'>
                            <FacebookIcon />
                        </div>                        
                    </div>                                                    
                </div>
                <div className='sign-callout-container'>
                    <p>You have an account ? <b><Link to='/authentication' className='callout-link callout-link--hover'>Sign in</Link></b></p>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(RegisterOption);