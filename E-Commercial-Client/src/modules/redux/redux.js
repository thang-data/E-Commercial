import { createStore } from 'redux';

const defaultState = {
    connectionChecking: false,
    accountInfo: '',
    storeInfo: '',
    sellingList: '',
    cartList: '',
    orderList: '',
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'UPDATE_CONNECTION_CHECKING': return { ...state, connectionChecking: action.payload };
        case 'UPDATE_ACCOUNT_INFO': return { ...state, accountInfo: action.payload };              
        case 'UPDATE_STORE_INFO': return { ...state, storeInfo: action.payload };
        case 'UPDATE_SELLING_LIST': return { ...state, sellingList: action.payload };
        case 'UPDATE_CART_LIST': return { ...state, cartList: action.payload };                                                                                
        case 'UPDATE_ORDER_LIST': return { ...state, orderList: action.payload };        

        default: return state;
    }    
}

export const store = createStore(reducer);