import {createStore} from 'redux';
import countReducer from './reducer';

const store = createStore(countReducer,0);
export default function getStore(){
    return store;
}
//module.exports = getStore;