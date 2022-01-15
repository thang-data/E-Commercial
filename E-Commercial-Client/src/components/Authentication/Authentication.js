import React, { Fragment } from 'react';
import './Authentication.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { forgotPassword } from './Modules/forgot-password';
import AuthenticationInput from './AuthenticationInput';
import AuthenticationForgotPassword from './AuthenticationForgotPassword';
import LocalMallIcon from '@mui/icons-material/LocalMall';

class Authentication extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            forgotPassword: false,
        }

        //Modules
        this.forgotPassword = this.forgotPassword.bind(this);        
    }  

    forgotPassword() {
        forgotPassword(this);
    }    

    render() {
        return(
            <Fragment>
                <div className='sign-wrapper'>                                        
                    <p className='sign-vshop__name'><b>vShop</b><span><LocalMallIcon className='sign-vshop__icon' /></span></p>                                        
                    <div className='authentication__form sign-inner sign-inner--hover'>
                        {
                            this.state.forgotPassword ?
                            <AuthenticationForgotPassword forgotPassword={ this.forgotPassword } />:
                            <div>
                                <p className='sign-inner__title'><b>Sign-In</b></p>
                                <hr className='horizontal-line' />
                                <AuthenticationInput forgotPassword={ this.forgotPassword } />
                            </div>
                        }                        
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

export default connect(mapStateToProps)(withRouter(Authentication));