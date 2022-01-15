import React, { Fragment } from 'react';
import { handleResetPassword } from './APIs/handle-reset-password';
import { hidePassword } from '../../modules/password/hide-password';
import { handleChange } from '../../modules/input/handle-change';
import { countDown } from './Modules/count-down';

class AuthenticationResetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            verifyCodeInput: '',
            resetPasswordInput: '',
            resetPasswordAgainInput: '',
            timeCountDown: 300,
            hidePassword: true,
            showLoadingState: false
        }

        //APIs
        this.handleResetPassword = this.handleResetPassword.bind(this);

        //Modules
        this.handleChangeVerifyCode = this.handleChangeVerifyCode.bind(this);
        this.handleChangeResetPassword = this.handleChangeResetPassword.bind(this);
        this.handleChangeResetPasswordAgain = this.handleChangeResetPasswordAgain.bind(this);
        this.hidePassword = this.hidePassword.bind(this);    
    }

    componentDidMount() {
        countDown(this);
    }

    //APIs
    handleResetPassword(event) {
        handleResetPassword(this, event);
    }

    //Modules
    handleChangeVerifyCode(event) {
        handleChange(this, event, 'verifyCodeInput');
    }

    handleChangeResetPassword(event) {
        handleChange(this, event, 'resetPasswordInput');
    }

    handleChangeResetPasswordAgain(event) {
        handleChange(this, event, 'resetPasswordAgainInput');
    }

    hidePassword() {
        hidePassword(this);
    }
    
    render() {
        return(
            <Fragment>
                <form onSubmit={ this.handleResetPassword }>
                    <p className='sign-inner__title'><b>Reset password</b></p>
                    <hr className='sign-inner__horizontal-line' />
                    <label>
                        <input
                            type='text'
                            placeholder='Verify code'                                     
                            value={ this.state.verifyCodeInput}
                            onChange={ this.handleChangeVerifyCode }
                            className='sign__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label>
                        <input
                            type={ this.state.hidePassword ? 'password' : 'text' }
                            placeholder='New password'                                    
                            value={ this.state.resetPasswordInput }
                            onChange={ this.handleChangeResetPassword }
                            className='sign__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label>
                        <input
                            type={ this.state.hidePassword ? 'password' : 'text' }
                            placeholder='New password again'                                    
                            value={ this.state.resetPasswordAgainInput }
                            onChange={ this.handleChangeResetPasswordAgain }
                            className='sign__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label className='show-password-container'>
                        <input 
                            type='checkbox'
                            onClick={ this.hidePassword }
                            className='show-password__checkbox'
                        />
                        <p><b>Show password</b></p>              
                    </label>
                    {
                        this.state.showLoadingState ?
                        <input 
                            type='submit' 
                            value='Sending...' 
                            disabled
                            className='reset-password__submit-btn yellow-btn btn'
                        />:
                        <div>
                            <input 
                                type='submit' 
                                value={ `Send (${ this.state.timeCountDown }s)` } 
                                className='reset-password__submit-btn yellow-btn btn btn--hover'
                            />
                        </div>
                    }
                </form>                
            </Fragment>
        );
    }
}

export default AuthenticationResetPassword;