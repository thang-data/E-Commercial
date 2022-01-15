import React, { Fragment } from 'react';
import './Register.css';
import RegisterInput from './RegisterInput';
import { withRouter } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';

class Register extends React.Component {       
    render() {
        return(
            <Fragment>
                <div className='sign-wrapper'>
                    <p className='sign-vshop__name'><b>vShop</b><span><LocalMallIcon className='sign-vshop__icon' /></span></p>
                    <div className='register__form sign-inner sign-inner--hover'>                        
                        <p className='sign-inner__title'><b>Create account</b></p>
                        <hr className='horizontal-line' />
                        <RegisterInput />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Register);