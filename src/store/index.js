import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import categoriesReducer from './categories/categories-reducer.js';
import productsReducer from './products/products-reducer.js';

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

const store = () => {
  return createStore( reducers, composeWithDevTools() );
};

export default store();