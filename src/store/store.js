import {createStore} from 'redux';
import reducer from './cart';

// reducer func
console.log(reducer);

export default createStore(reducer);