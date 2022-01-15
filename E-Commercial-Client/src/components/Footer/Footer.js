import React, { Fragment } from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='footer-wrapper'>
                    <p className='footer__content'>Copyright &copy; 2021 vShop. All right reserved</p>
                </div>
            </Fragment>
        );
    }
}

export default Footer;