import React, { Fragment } from 'react';

class StoreInfoBasic extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='store-info-basic-container'>                                                        
                    <p><b>Name:&emsp;</b><span>{ this.props.storeInfo.name }</span></p>
                    <p><b>Email:&emsp;</b><span>{ this.props.storeInfo.email }</span></p>
                    <p><b>Phone:&emsp;</b><span>{ this.props.storeInfo.phone }</span></p>
                    <p><b>Address:&emsp;</b><span>{ this.props.storeInfo.address }</span></p>
                </div>
            </Fragment>
        );
    }
}

export default StoreInfoBasic;