import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Routes from '../Routes/Routes';

export const context = React.createContext();

class Context extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accountIcon: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fuser%2Favatar.png?alt=media&token=aeaccc95-301e-4ed3-8d84-de4fd62c9918',
            storeIcon: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fstore%2Flogo.png?alt=media&token=5bdcbe26-5e70-495c-8376-17867566a087',
            geoList: [
                {
                    country: 'VIETNAM', city: ['Ho Chi Minh', 'Ha Noi', 'Da Nang']
                },
                {
                    country: 'UK', city: ['London', 'Manchester', 'Liverpool']
                }
            ],
            categoryList: [
                {
                    id: '',
                    img: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fcategory%2Ffashion.png?alt=media&token=837b71c7-3338-474f-80c5-6e7174104cd7',
                    name: 'Fashion'
                },
                {
                    id: '',
                    img: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fcategory%2Felectronic.png?alt=media&token=9cd22037-e929-4356-a2f2-3021dd32a601',
                    name: 'Electronic'
                },
                {
                    id: '',
                    img: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fcategory%2Fhousehold.png?alt=media&token=bb00b65b-1a3b-4b1c-881f-2c687fd4d366',
                    name: 'Household'
                },
                {
                    id: '',
                    img: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fcategory%2Faccessory.png?alt=media&token=c1d3b329-210b-4378-b43a-916bde9b44ce',
                    name: 'Accessory'
                },
                {
                    id: '',
                    img: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fcategory%2Fbook.png?alt=media&token=d8c542d9-4c2b-4276-b65b-b3fbd25583eb',
                    name: 'Book'
                },
                {
                    id: '',
                    img: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fcategory%2Fsport.png?alt=media&token=e3bb162a-c23f-40f0-9f88-9cc6835efc12',
                    name: 'Sport'
                },
                {
                    id: '',
                    img: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fcategory%2Fnutrion.png?alt=media&token=dde0b373-8cde-4c08-b8f2-4f6cffd9cdd9',
                    name: 'Nutrion'
                },
                {
                    id: '',
                    img: 'https://firebasestorage.googleapis.com/v0/b/e-commercial-59151.appspot.com/o/assets%2Fcategory%2Fcamera.png?alt=media&token=7e11a8dd-be74-401e-82f0-cf032c36c2db',
                    name: 'Camera'
                }
            ],            
        }
    }

    render() {        
        return(
            <Fragment>
                <context.Provider value={ this.state }>
                    <Routes />
                </context.Provider>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Context);