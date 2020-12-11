import React from 'react';
import Storefront from './components/storefront/storefront.js';
import {connect} from 'react-redux';

function App(store) {
console.log(store);
  return (
    <>
      <Storefront />
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products:state.products
  }
}
export default connect(mapStateToProps, null)(App);
