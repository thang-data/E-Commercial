import React, { Fragment } from 'react';
import { handleForgotPassword } from './APIs/handle-forgot-password';
import { handleResetPassword } from './APIs/handle-reset-password';
import { handleChange } from '../../modules/input/handle-change';
import { hidePassword } from '../../modules/password/hide-password';
import { countDown } from './Modules/count-down';
import AuthenticationResetPassword from './AuthenticationResetPassword';

class AuthenticationForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accountEmailInput: '',
            showLoadingState: false
        }

        //APIs
        this.handleForgotPassword = this.handleForgotPassword.bind(this);

        //Modules
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    //APIs
    handleForgotPassword(event) {
        handleForgotPassword(this, event);
    }

    //Modules
    handleChangeEmail(event) {
        handleChange(this, event, 'accountEmailInput');
    }

    render() {
        return(
            <Fragment>                
                {
                    this.state.resetPassword ?
                    <AuthenticationResetPassword />:
                    <form onSubmit={ this.handleForgotPassword }>
                        <p className='sign-inner__title'><b>Forgot password</b></p>
                        <hr className='sign-inner__horizontal-line' />
                        <label>
                            <input
                                type='email'
                                placeholder='Email'                                     
                                value={ this.state.accountEmailInput}
                                onChange={ this.handleChangeEmail }
                                className='forgot-password__input sign__input input input-with-border input-none-border--focus' 
                            />
                        </label>
                        {
                            this.state.showLoadingState ?
                            <input 
                                type='submit' 
                                value='Sending...' 
                                disabled
                                className='forgot-password__submit-btn btn yellow-btn'
                            />:
                            <div>
                                <input 
                                    type='submit' 
                                    value='Send' 
                                    className='forgot-password__submit-btn yellow-btn btn btn--hover'
                                />
                                <div className='forgot-password__turn-back-btn gray-btn btn btn--hover' onClick={ this.props.forgotPassword }>
                                    <p><b>Back</b></p>
                                </div>
                            </div>
                        }         
                    </form>
                }                                                       
            </Fragment>
        );
    }
}

export default AuthenticationForgotPassword;