import React from 'react';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import ProductsReducer from '../../store/products/products-reducer';
import CategoriesReducer from '../../store/categories/categories-reducer';

function Main() {
  return (     
    <>
      <div className="wrapper">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li>< Link to="/categories">Categories</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/products">
            <ProductsReducer />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
    </>
  );
};

export default Main;