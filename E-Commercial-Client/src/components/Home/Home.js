import React, { Fragment } from 'react';
import './Home.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { context } from '../Context/Context';
import HorizontalScroll from 'react-scroll-horizontal';

class Home extends React.Component {
    render() {
        const discountHorizontalScroll  = { width: `100%`, height: '420px' }
        
        return(
            <Fragment>
                <context.Consumer>
                    {
                        (context) => 
                        <div className='home-wrapper'>                                                                                                    
                            <div className='home-welcome-container'>
                                <p>Welcome to<b> vShop</b></p>
                                <p><b>-- <i>"Buy more. Spend less"</i> --</b></p>                       
                            </div>
                            <div className='home-category-container'>
                                {
                                    context.categoryList.map(item =>
                                        <div className='home-category__item'>
                                            <p className='home-category-item__name'><b>{ item.name }</b></p>
                                            <img alt='vshop-catagory-item' src={ item.img }/>
                                            <p className='home-category-item__link'><b><Link to={ `/shopping/load/category/${ item.name }` } className='shopping-on-category-link shopping-on-category-link--hover'>Buy now</Link></b></p>                                            
                                        </div>
                                    )
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

export default connect(mapStateToProps)(withRouter(Home));