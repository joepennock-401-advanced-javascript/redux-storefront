import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/index.js';
import Storefront from './components/storefront/storefront.js';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Storefront />
      </BrowserRouter>
    </Provider>
  );
};

export default App;