import axios from 'axios';
import { axiosConfig } from '../../../App';

export const liveSearch = (callThis, event) => {
    callThis.setState({ typing: true, input: event.target.value, result: [], showLoadingIcon: true });

    const postData = {
        searchInput: event.target.value
    }

    axios.post('http://localhost:5000/product/search/', postData, axiosConfig)
    .then(res => {
        if(res) {
            callThis.setState({ showLoadingIcon: false });
        }
        if(res.data.product.message === 'live search: success') {
            const result = res.data.product.result;

            result.forEach(element => {
                if(callThis.state.result.includes(element) === false) {
                    callThis.state.result.push(element);                                        
                }
                else {
                    return;
                }
            });

            callThis.setState({ result: callThis.state.result }); return;                                    
        }
    });
}