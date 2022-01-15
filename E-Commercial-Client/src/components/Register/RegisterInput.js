import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { handleRegister } from './APIs/handle-register';
import { handleChange } from '../../modules/input/handle-change';
import { hidePassword } from '../../modules/password/hide-password';
import RegisterOption from './RegisterOption';

class RegisterInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accountNameInput: '',
            accountPhoneInput: '',
            accountEmailInput: '',
            accountPasswordInput: '',
            passwordAgainInput: '',
            hidePassword: true,
            showLoadingState: false
        }

        //APIs
        this.handleRegister = this.handleRegister.bind(this);

        //Modules
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordAgain = this.handleChangePasswordAgain.bind(this);
        this.hidePassword = this.hidePassword.bind(this);

    }

    //APIs
    handleRegister(event) {
        handleRegister(this, event);                        
    }

    //Modules
    handleChangeUsername(event) {
        handleChange(this, event, 'accountNameInput');
    }

    handleChangePhone(event) {
        handleChange(this, event, 'accountPhoneInput');
    }

    handleChangeEmail(event) {
        handleChange(this, event, 'accountEmailInput');
    }

    handleChangePassword(event) {
        handleChange(this, event, 'accountPasswordInput');
    }

    handleChangePasswordAgain(event) {
        handleChange(this, event, 'passwordAgainInput');
    }

    hidePassword() {
        hidePassword(this);
    }

    render() {
        return(
            <Fragment>
                <form onSubmit={ this.handleRegister }>
                    <label>
                        <input
                            type='text'
                            placeholder='Username'                                     
                            value={ this.state.accountNameInput }                                     
                            onChange={ this.handleChangeUsername }
                            className='sign__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label>
                        <input
                            type='tel'
                            placeholder='Phone'                                     
                            value={ this.state.accountPhoneInput }                                     
                            onChange={ this.handleChangePhone }
                            className='sign__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label>
                        <input
                            type='email'
                            placeholder='Email'                                     
                            value={ this.state.accountEmailInput }
                            onChange={ this.handleChangeEmail }
                            className='sign__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label>
                        <input
                            type={ this.state.hidePassword ? 'password' : 'text' }
                            placeholder='Password'                                     
                            value={ this.state.accountPasswordInput }
                            onChange={ this.handleChangePassword }
                            className='sign__input input input-with-border input-none-border--focus' 
                        />
                    </label>
                    <label>
                        <input
                            type={ this.state.hidePassword ? 'password' : 'text' }
                            placeholder='Password again'                                     
                            value={ this.setState.passwordAgainInput }                                     
                            onChange={ this.handleChangePasswordAgain }
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

                    <RegisterOption showLoadingState={ this.state.showLoadingState } />
                </form>                
            </Fragment>
        );
    }
}

export default withRouter(RegisterInput);