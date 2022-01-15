import React, { Fragment } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const accountId = this.props.accountInfo._id;
        const storeId = this.props.storeInfo._id;
    
        return(
            <Fragment>
                <div className='header-wrapper'>                                        
                    <div className='header-menu'>
                        <div className='header-menu__item'>
                            <p><b><Link to='/' className='nav__link nav__link--hover'>Homepage</Link></b></p>
                        </div>
                        <div className='header-menu__item'>
                            <p><b><Link to={ `/sell/from/store/${ storeId }` } className='nav__link nav__link--hover'>Selling</Link></b></p>
                        </div>       
                        <div className='header-menu__item cart-counter'>
                            {
                                this.props.cartList !== 'empty' && this.props.cartList.length > 0 ?
                                <p className='cart-count__val'><b>{ this.props.cartList.length }</b></p>:
                                null
                            }                                                    
                            <p><b><Link to={ `/cart/manage/of/${ accountId }` } className='nav__link nav__link--hover'>My Cart</Link></b></p>
                        </div>    
                        <div className='header-menu__item'>                            
                            <p><b><Link to={`/store/manage/${ storeId }`} className='nav__link nav__link--hover'>My Store</Link></b></p>
                        </div>
                        <div className='header-menu__item'>                            
                            <p><b><Link to={`/account/manage/${ accountId }`} className='nav__link nav__link--hover'>Account</Link></b></p>
                        </div>                              
                        <div className='header-menu__item'>
                            <p><b><Link to='/authentication' className='nav__link nav__link--hover'>Sign-in</Link></b></p>                                                    
                        </div> 
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

export default connect(mapStateToProps)(withRouter(Header));