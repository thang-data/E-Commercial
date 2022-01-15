import React, { Fragment } from 'react';
import { confirmProductOrder } from './APIs/confirm-product-order';
import BeenhereIcon from '@material-ui/icons/Beenhere';

class SellingOrderList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoadingState: false
        }

        //APIs
        this.confirmProductOrder = this.confirmProductOrder.bind(this);
    }

    //APIs
    confirmProductOrder(orderId) {
        confirmProductOrder(this, orderId);
    }

    render() {
        return(
            <Fragment>
                <div className='order-list-container'>                    
                    {
                        this.props.orderList.map(item => 
                            <div>
                                <p><b>{ item.time }</b></p>
                                {
                                    item.state === 'waiting' ?
                                    <p className='order-list-detail__state'><b><i>(This order is waiting for confirmation)</i></b></p>:
                                    <p className='order-list__confirmed-tag'><BeenhereIcon />&emsp;<span><b>Confirmed</b></span></p>
                                }
                                <div className='selling-order-list-detail-container'>
                                    <p className='selling-order-list-detail__title'><b>1/ Receiver:&emsp;</b><span><b className='order-list-detail__receiver'>{ item.name }</b></span></p>                                                                           
                                    <p className='selling-order-list-detail__title'><b>2/ Phone:&emsp;</b><span><b className='order-list-detail__receiver'>{ item.phone }</b></span></p>                                   
                                    <p className='selling-order-list-detail__title'><b>3/ Address:&emsp;</b><span><b className='order-list-detail__receiver'>{ item.address[2] }, { item.address[1] }, { item.address[0] }</b></span></p>                                   
                                    <p className='selling-order-list-detail__title'><b>4/ Option:&emsp;</b><span><b className='order-list-detail__product'><i>{ item.option }</i></b></span></p>                                                                   
                                    <p className='selling-order-list-detail__title'><b>5/ Quantity:&emsp;</b><span><b className='order-list-detail__product'><i>{ item.quantity }</i></b></span></p>                                   
                                    <p className='selling-order-list-detail__title'><b>6/ Price:&emsp;</b><span><b className='order-list-detail__product'><i>${ item.price[0] }</i></b></span></p>                                   
                                    <p className='selling-order-list-detail__title'><b>7/ Shipping:&emsp;</b><span><b className='order-list-detail__product'><i>${ item.price[1] }</i></b></span></p>                                                                   
                                    <p className='selling-order-list-detail__title'><b>8/ Total:&emsp;</b><span><b className='order-list-detail__price'>${ item.price[0] + item.price[1] }</b></span></p>
                                </div>                                                                                                
                                {
                                    this.state.showLoadingState ?
                                    <div className='confirm-order-btn btn white-btn'><p><b>Confirming...</b></p></div>:
                                    <div>
                                        {
                                            item.state === 'waiting' ?
                                            <div className='confirm-order-btn btn white-btn white-btn--hover' onClick={ () => this.confirmProductOrder(item._id) }><p><b>Confirm this order</b></p></div>:
                                            null
                                        }
                                    </div>                                    
                                }                                                                
                            </div>
                        )
                    }
                    <hr className='horizontal-line' />
                </div>
            </Fragment>
        );
    }
}

export default SellingOrderList