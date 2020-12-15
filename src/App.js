import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index.js';
import Storefront from './components/storefront/storefront.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Storefront />
      </Provider>
    </BrowserRouter>
  );
};

export default App;