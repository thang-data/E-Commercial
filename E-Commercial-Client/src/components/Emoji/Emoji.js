import React, { Fragment } from 'react';
import './Emoji.css';

class Emoji extends React.Component {
    render() {        
        return (
            <Fragment>
                <div className='emoji-list-container'>
                    {
                        this.props.emojiList.map((emoji, index) => 
                            <div className='emoji__choice emoji__choice--hover' onClick={ () => this.props.insertEmoji(index) }>
                                { emoji }
                            </div>
                        )
                    }
                </div>
            </Fragment>
        );
    }
}

export default Emoji;