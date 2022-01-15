import React, { Fragment } from 'react';
import './Selling.css';
import { connect } from 'react-redux';
import { context } from '../Context/Context';
import { withRouter, Link } from 'react-router-dom';
import { changeRenderChoice } from './Modules/change-render-choice';
import { postProductDetail } from './APIs/post-product-detail';
import SellingProductList from './SellingProductList';
import SellingInput from './SellingInput';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

class Selling extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderChoice: 'list',
            sellingList: [],
            uploadProgress: '',            
        }

        //APIs
        this.postProductDetail = this.postProductDetail.bind(this);        
        
        //Modules
        this.changeRenderChoice = this.changeRenderChoice.bind(this);              
    }

    //APIs
    postProductDetail(event) {
        postProductDetail(this, event);
    }

    //Modules
    changeRenderChoice(choice) {
        changeRenderChoice(this, choice);
    }  

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
                                                <div>
                                                    {
                                                        this.state.renderChoice === 'list' ?
                                                        <div className='btn selling__render-choice-btn selling__render-choice-btn--hover ' onClick={ () => this.changeRenderChoice('form') }>
                                                            <p><b>Sell product, now &gt;&gt;</b></p>
                                                        </div>:
                                                        <div className='btn selling__render-choice-btn selling__render-choice-btn--hover' onClick={ () => this.changeRenderChoice('list') }>
                                                            <p><b>Manage product &gt;&gt;</b></p>
                                                        </div>                                                        
                                                    }
                                                    {
                                                        this.state.renderChoice === 'list' ?
                                                        <div className='info-manager-inner'>
                                                            <p className='info-manager-inner__title'><b>Selling list&ensp;</b><span><SellOutlinedIcon className='info-manager-inner__icon' /></span></p>                                            
                                                            <hr />
                                                            {
                                                                this.props.sellingList !== '' && this.props.sellingList.length === 0 ?
                                                                <p className='selling-list__notification'><b><i>You have not sold any products yet.</i></b></p>:
                                                                <div>
                                                                    {
                                                                        this.props.sellingList !== '' && this.props.sellingList.length > 0 ?
                                                                        <div>
                                                                            {
                                                                                this.props.sellingList.map(item =>
                                                                                    <SellingProductList product={ item.product } order={ item.order } />                                                                                        
                                                                                )
                                                                            }
                                                                        </div>:
                                                                        null
                                                                    }                                                                    
                                                                </div>
                                                            }
                                                        </div>:
                                                        <div className='info-manager-inner'>
                                                            <p className='info-manager-inner__title'><b>Product information&ensp;</b><span><InfoOutlinedIcon className='info-manager-inner__icon' /></span></p>                                            
                                                            <hr />
                                                            <SellingInput 
                                                                categoryList={ context.categoryList } 
                                                                storeInfo={ this.props.storeInfo } 
                                                                geoList={ context.geoList } 
                                                                submitChoice='post' 
                                                            />
                                                        </div>
                                                    }
                                                </div>:                                        
                                                <div className='notification'>
                                                    <p className='notification__title'><b>Notification</b></p>                                                                                                
                                                    <hr />                                                    
                                                    <p className='notification__content'><b>You have to create a store to use this feature !</b></p>                                                    
                                                    <p>Do you want to sell products ? <b><Link to='/store' className='callout__link callout__link--hover'>Create a store, now</Link></b></p>
                                                
                                                </div>
                                            }
                                        </div>:
                                        <div className='notification'>                                            
                                            <p className='notification__title'><b>Notification</b></p>                                                                                
                                            <hr />                                            
                                            <p className='notification__content'><b>You have to sign in to use this feature !</b></p>                                            
                                            <p>Do you want to sell products ? <b><Link to='/authentication' className='callout__link callout__link--hover:hover'>Sign in, now</Link></b></p>                                        
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

export default connect(mapStateToProps)(withRouter(Selling));