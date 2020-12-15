import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import Food from '../products/food.js';
import Electronics from '../products/electronics.js';

export default function Main() {
  return (     
    <>
      <div className="wrapper">
        <nav>
          <ul>
            <li><Link to="/food">Food</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/electronics">
            <Electronics />
          </Route>
        </Switch>
      </div>
    </>
  );
};

