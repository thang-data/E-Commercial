import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { cancelOrder } from './APIs/cancel-order';
import BeenhereIcon from '@material-ui/icons/Beenhere';

class AccountOrderList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoadingState: false
        }

        //APIs
        this.cancelOrder = this.cancelOrder.bind(this);
    }

    //APIs
    cancelOrder(orderId) {
        cancelOrder(this, this.props.accountInfo._id, orderId);
    }

    render() {
        return(
            <Fragment>
                <div className='order-list-container'>                    
                    {
                        this.props.orderList.map(item =>
                            <div>
                                <p><b>{ item.order.time }</b></p>
                                {
                                    item.order.state === 'waiting' ?
                                    <p className='order-list-detail__state'><b><i>(This order is waiting for confirmation from seller)</i></b></p>:
                                    <p className='order-list__confirmed-tag'><BeenhereIcon />&emsp;<span><b>Confirmed</b></span></p>
                                }                                    
                                <div className='account-order-list__product-detail'>
                                    {
                                        item.product.file[0].type === 'image' ?
                                        <img alt='product-img' src={ item.product.file[0].url } className='account-order-list__product-file' />:
                                        <video alt='product-vid' src={ item.product.file[0].url } className='account-order-list__product-file' />
                                    }
                                    <Link to={ `/product/detail/view/${ item.product._id }` } className='account-order-list__product-name account-order-list__product-name--hover'><b>{ item.product.name }</b></Link>                                    
                                </div>
                                <p className='account-order-list-detail__title'><b>Receiver:&emsp;</b><span><b className='order-list-detail__receiver'>{ item.order.name }</b></span></p>                                        
                                <p className='account-order-list-detail__title'><b>Phone:&emsp;</b><span><b className='order-list-detail__receiver'>{ item.order.phone }</b></span></p>
                                <p className='account-order-list-detail__title'><b>Address:&emsp;</b><span><b className='order-list-detail__receiver'>{ item.order.address[2] }, { item.order.address[1] }, { item.order.address[0] }</b></span></p>
                                <p className='account-order-list-detail__title'><b>Option:&emsp;</b><span><i className='order-list-detail__product'>{ item.order.option }</i></span></p>                                
                                <p className='account-order-list-detail__title'><b>Quantity:&emsp;</b><span><i className='order-list-detail__product'>{ item.order.quantity }</i></span></p>
                                <p className='account-order-list-detail__title'><b>Price:&emsp;</b><span><i className='order-list-detail__product'>${ item.order.price[0] }</i></span></p>
                                <p className='account-order-list-detail__title'><b>Shipping:&emsp;</b><span><i className='order-list-detail__product'>${ item.order.price[1] }</i></span></p>                                
                                <p className='account-order-list-detail__title'><b>Total:&emsp;</b><span><b className='order-list-detail__price'>${ item.order.price[0] + item.order.price[1] }</b></span></p>                                                                
                                {
                                    this.state.showLoadingState ?
                                    <div className='cancel-order-btn btn white-btn'><p><b>...</b></p></div>:
                                    <div>
                                        {
                                            item.order.state === 'waiting' ?
                                            <div className='cancel-order-btn btn white-btn white-btn--hover' onClick={ () => this.cancelOrder(item.order._id) }><p><b>Cancel this order</b></p></div>:
                                            null
                                        }                                        
                                    </div>
                                }                                
                                <hr className='horizontal-line' />                                
                            </div>
                        )
                    }                    
                </div>
            </Fragment>
        );
    }
}

export default withRouter(AccountOrderList);