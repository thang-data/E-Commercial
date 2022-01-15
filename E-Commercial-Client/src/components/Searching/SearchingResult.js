import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';

class SearchingResult extends React.Component {
    render() {
        return(
            <Fragment>
                <div className='searching-result-container' onClick={ this.props.closeResult }>
                    <div className='searching-result__header'>
                        <p className='searching-result__title'><b><i>Searching...</i></b></p>
                        <CancelIcon className='searching-result__close-btn searching-result__close-btn--hover' onClick={ this.props.closeResult } />                        
                    </div>
                    {
                        this.props.result.map(item =>
                            <div className='searching-result__item searching-result__item--hover' onClick={ () => this.props.viewProduct(item._id) }>
                                <p><b>{ item.name }</b>&emsp;<span>${ item.price }&emsp;| <span className='searching-result-item__description'>{ item.description }</span></span></p>
                            </div>                                         
                        )
                    }                                                                   
                </div>
            </Fragment>
        );
    }
}

export default withRouter(SearchingResult);