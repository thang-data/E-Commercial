import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { handleAuthentication } from './APIs/handle-authentication';
import { handleChange } from '../../modules/input/handle-change';
import { hidePassword } from '../../modules/password/hide-password';
import AuthenticationOption from './AuthenticationOption';

class AuthenticationInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accountEmailInput: '',
            accountPasswordInput: '',            
            hidePassword: true,
            showLoadingState: false
        }

        //APIs
        this.handleAuthentication = this.handleAuthentication.bind(this);

        //Modules
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.hidePassword = this.hidePassword.bind(this);        
    }

    //APIs
    handleAuthentication(event) {
        handleAuthentication(this, event);       
    }

    //Modules
    handleChangeEmail(event) {
        handleChange(this, event, 'accountEmailInput');
    }

    handleChangePassword(event) {
        handleChange(this, event, 'accountPasswordInput');
    }

    hidePassword() {
        hidePassword(this);
    }

    render() {
        return(
            <Fragment>
                <form onSubmit={ this.handleAuthentication }>
                    <label>
                        <input
                            type='email'
                            placeholder='Email'                                     
                            value={ this.state.accountEmailInput}
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
                    <label className='show-password-container'>
                        <input 
                            type='checkbox'
                            onClick={ this.hidePassword }
                            className='show-password__checkbox'
                        />
                        <p><b>Show password</b></p>              
                    </label>

                    <AuthenticationOption showLoadingState={ this.state.showLoadingState } forgotPassword={ this.props.forgotPassword } />
                </form>                
            </Fragment>
        );
    }
}

export default withRouter(AuthenticationInput);