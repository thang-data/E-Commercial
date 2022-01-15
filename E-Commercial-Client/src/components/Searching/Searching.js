import React, { Fragment } from 'react';
import './Searching.css';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { context } from '../Context/Context';
import { liveSearch } from './APIs/live-search';
import { closeResult } from './Modules/close-result';
import { viewProduct } from './Modules/view-product';
import { linkToShopping } from './Modules/link-to-shopping';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchingInput from './SearchingInput';
import SearchingResult from './SearchingResult';

class Searching extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typing: false,
            input: '',
            result: [],
            showLoadingIcon: false
        }

        //APIs
        this.liveSearch = this.liveSearch.bind(this);

        //Modules
        this.closeResult = this.closeResult.bind(this);
        this.viewProduct = this.viewProduct.bind(this);   
        this.linkToShopping = this.linkToShopping.bind(this);
    }

    //APIs
    liveSearch(event) {
        liveSearch(this, event);
    }

    //Modules
    closeResult() {
        closeResult(this);
    }

    viewProduct(productId) {
        viewProduct(this, productId);
    }

    linkToShopping(productName) {
        linkToShopping(this, productName);
    }

    render() {        
        return(
            <Fragment>
                <context.Consumer>
                    {
                        (context) =>
                        <div className='searching-wrapper'>                                    
                            <div className='searching-inner'>
                                <Link to='/' className='searching-inner__vshop-link searching-inner__vshop-link--hover'>                        
                                    <p><b>vShop</b></p>
                                    <LocalMallIcon className='searching-inner__shopping-icon' />                        
                                </Link>
                                <div className='searching-inner__title'>
                                    <p><b>What do you want to buy ?</b></p>
                                </div>
                                <div className='searching-input-container'>
                                    <SearchingInput 
                                        input={ this.state.input }
                                        liveSearch={ this.liveSearch }
                                        linkToShopping={ () => this.linkToShopping(this.state.input) }                                       
                                    />                            
                                    {
                                        this.state.typing === true ?
                                        <SearchingResult                                            
                                            closeResult={ this.closeResult }
                                            viewProduct={ this.viewProduct }
                                            result={ this.state.result }                                                                                        
                                            showLoadingIcon={ this.state.showLoadingIcon }
                                        />:
                                        null
                                    }                                    
                                </div>
                                {
                                    this.props.accountInfo !== '' ?
                                    <div>
                                        {
                                            this.props.accountInfo.avatar !== '' ?
                                            <Link to={`/account/manage/${ this.props.accountInfo._id }`} className='searching-inner__account-link searching-inner__account-link--hover'>
                                                <div className='searching-inner__account-info'>
                                                    <p><b>{ this.props.accountInfo.name }</b></p>
                                                    <p><b>{ this.props.accountInfo.email }</b></p>
                                                </div>                                                
                                                <img alt='account-icon' src={ this.props.accountInfo.avatar } className='searching-inner__account-avatar' />
                                            </Link>:
                                            <Link to={`/account/manage/${ this.props.accountInfo._id }`} className='searching-inner__account-link searching-inner__account-link--hover'>
                                                <div className='searching-inner__account-info'>
                                                    <p><b>{ this.props.accountInfo.name }</b></p>
                                                    <p>{ this.props.accountInfo.email }</p>
                                                </div>
                                                <img alt='account-icon' src={ context.accountIcon } className='searching-inner__account-avatar' />
                                            </Link>
                                        }
                                    </div>:                                    
                                    <Link to='/authentication' className='searching-inner__account-link searching-inner__account-link--hover'>
                                        <p><b>Sign-in</b></p>
                                        <img alt='account-icon' src={ context.accountIcon } className='searching-inner__account-avatar' />
                                    </Link>                                    
                                }                                                                
                            </div>                                                             
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

export default connect(mapStateToProps)(withRouter(Searching));