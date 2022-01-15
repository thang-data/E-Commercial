import axios from 'axios';
import Cookies from 'js-cookie';
import { axiosConfig } from '../App';

export const loadAccountManageInfo = (callThis) => {
    axios.get('http://localhost:5000/account/manage/info/load/?account=' + Cookies.get('account'), axiosConfig)
    .then(res => {
        if(res.data.protect === 'miss' || res.data.info === 'load account manage info: account is not existed') {
            return;
        }
        if(res.data.info.message === 'load account manage info: success') {
            callThis.props.dispatch({ type: 'UPDATE_ACCOUNT_INFO', payload: res.data.info.result }); return;                                 
        }            
    });    
}