import {createStore} from 'redux';
import reducer from './cart';

console.log(reducer);
export default createStore(reducer);