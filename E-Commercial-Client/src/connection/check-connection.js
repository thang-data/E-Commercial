import axios from 'axios';
import { axiosConfig } from '../App';

export const checkConnection = (callThis) => {
    axios.get('http://localhost:5000/?message=checking', axiosConfig)
    .then(res => {
        if(res.data.connection === 'success') {
            callThis.props.dispatch({ type: 'UPDATE_CONNECTION_CHECKING', payload: true }); return;
        }
    });
}