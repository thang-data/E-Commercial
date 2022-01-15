import React, { Fragment } from 'react';

class AccountInfoBasic extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='account-info-basic-container'>                                                        
                    <p><b>Name:&emsp;</b><span>{ this.props.accountInfo.name }</span></p>
                    <p><b>Email:&emsp;</b><span>{ this.props.accountInfo.email }</span></p>
                    <p><b>Phone:&emsp;</b><span>{ this.props.accountInfo.phone }</span></p>                                        
                </div>
            </Fragment>
        );
    }
}

export default AccountInfoBasic;