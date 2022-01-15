import React, { Fragment } from 'react';
import './Store.css';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { context } from '../Context/Context';
import StoreInfoLogo from './StoreInfoLogo';
import StoreInfoBasic from './StoreInfoBasic';
import StoreInfoEdit from './StoreInfoEdit';
import StoreCreateInput from './StoreCreateInput';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

class Store extends React.Component {
    render() {
        return(
            <Fragment>
                <context.Consumer>
                    {
                        (context) =>
                        <div>
                            {
                                this.props.connectionChecking ?
                                <div className='info-manager-wrapper'>
                                    <p className='info-manager__vshop-name'><b>vShop</b><span><LocalMallIcon className='info-manager__vshop-icon' /></span></p>                                    
                                    {
                                        this.props.accountInfo !== '' ?
                                        <div>
                                            {
                                                this.props.storeInfo !== '' ?                                                                                
                                                <div className='info-manager-inner'>
                                                    <p className='info-manager-inner__title'><b>Store information&ensp;</b><span><StorefrontOutlinedIcon className='info-manager-inner__icon' /></span></p> 
                                                    <hr />
                                                    <div className='store-info-container'>
                                                        <StoreInfoLogo storeInfo={ this.props.storeInfo } storeIcon={ context.storeIcon } />                                                        
                                                        <StoreInfoBasic storeInfo={ this.props.storeInfo } />                                                        
                                                        <StoreInfoEdit storeInfo={ this.props.storeInfo } />                                                                                              
                                                    </div> 
                                                </div>:                                                                                        
                                                <div className='info-manager-inner'>
                                                    <p className='info-manager-inner__title'><b>Create store&ensp;</b><span><InfoOutlinedIcon className='info-manager-inner__icon' /></span></p>                                                    
                                                    <hr />                                                    
                                                    <StoreCreateInput accountInfo={ this.props.accountInfo } />
                                                </div>
                                            }
                                        </div>:
                                        <div className='notification'>                                            
                                            <p className='notification__title'><b>Notification</b></p>                                                                                
                                            <hr />                                            
                                            <p className='notification__content'><b>You have to sign in to use this feature !</b></p>                                            
                                            <p>Do you want to sell products ? <b><Link to='/authentication' className='authentication-link authentication-link--hover:hover'>Sign in, now</Link></b></p>                                        
                                        </div>                                                                
                                    }
                                </div>:
                                <img alt='waiting' src='https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fcategory%2Fwaiting.svg?alt=media&token=029794fc-fa24-4710-a718-20a00189d696' className='waiting-image' />
                            }
                        </div>                        
                    }
                </context.Consumer>                                
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(withRouter(Store));