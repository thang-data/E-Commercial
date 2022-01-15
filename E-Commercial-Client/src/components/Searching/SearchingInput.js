import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

class SearchingInput extends React.Component {
    render() {
        return(
            <Fragment>
                <label className='searching-input__label'>
                    <input 
                        type='text'
                        placeholder='Search for products...'
                        value={ this.props.input }
                        onChange={ this.props.liveSearch }
                        className='searching__input searching__input--focus'                        
                    />                                               
                </label>
                <div onClick={ this.props.linkToShopping } className='searching__btn searching__btn--hover'>
                    <p><b>Search</b></p>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(SearchingInput);