import axios from 'axios';
import Cookies from 'js-cookie';
import { axiosConfig } from '../App';

export const loadStoreManageInfo = (callThis) => {        
    if(Cookies.get('store')) {
        axios.get('http://localhost:5000/store/manage/info/load/?store=' + Cookies.get('store'), axiosConfig)
        .then(res => {
            if(res.data.protect === 'miss' || res.data.info === 'load store manage info: store is not existed') {
                return;
            }
            if(res.data.info.message === 'load store manage info: success') {
                callThis.props.dispatch({ type: 'UPDATE_STORE_INFO', payload: res.data.info.result }); return;
            }            
        });        
    }
    else {
        return;
    }    
}