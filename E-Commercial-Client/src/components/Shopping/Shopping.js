import React, { Fragment } from 'react';
import './Shopping.css';
import { withRouter, Link } from 'react-router-dom';
import { loadProductListOnCategory } from './APIs/load-product-list-on-category';
import { loadProductListOnName } from './APIs/load-product-list-on-name';
import { connect } from 'react-redux';

class Shopping extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resultOf: '',
            productList: []
        }
    }

    componentDidMount() {
        const { location } = this.props;
        if(location.pathname.slice(0, 24) === '/shopping/load/category/') {
            loadProductListOnCategory(this, location.pathname.split('/shopping/load/category/')[1]);
        }
        if(location.pathname.slice(0, 20) === '/shopping/load/name/') {
            loadProductListOnName(this, location.pathname.split('/shopping/load/name/')[1]);
        }
    }

    render() {
        return(
            <Fragment>
                <div className='shopping-wrapper'>
                    <p className='shopping__title'><u>shopping &gt; product list &gt; <b><i>"{ this.state.resultOf }"</i></b></u></p>
                    <div className='shopping-inner'>
                        {
                            this.state.productList.map(item => 
                                <div className='shopping__item'>
                                    <div className='shopping-item__img'>
                                        <img alt='product-img' src={ item.file[0].url } />
                                    </div>
                                    <div className='shopping-item__detail'>
                                        {
                                            item.name.length > 50 ?
                                            <p><b><Link to={ `/product/detail/view/${ item._id }` } className='shopping-item__product-link shopping-item__product-link--hover'>{ item.name.slice(0, 50) }...</Link></b></p>:
                                            <p><b><Link to={ `/product/detail/view/${ item._id }` } className='shopping-item__product-link shopping-item__product-link--hover'>{ item.name }</Link></b></p>
                                        }
                                    </div>
                                    <div className='shopping-item__detail'>
                                        {
                                            item.discount > 0 ?
                                            <p><b className='shopping-item__old-price'>${ item.price + item.discount }</b>&emsp;--&emsp;<b className='shopping-item__price'>${ item.price }</b></p>:
                                            <p className='shopping-item__price'><b>${ item.price }</b></p>
                                        }
                                    </div>  
                                    <div className='shopping-item__detail'>
                                        <p>{ item.quantity } item(s) more</p>
                                    </div>  
                                    <div className='shopping-item__detail'>
                                        <p className='shopping-item__address'><b>{ item.address[1] }, { item.address[0] }</b></p>
                                    </div>                                                                   
                                </div>
                            )
                        }
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

export default connect(mapStateToProps)(withRouter(Shopping));