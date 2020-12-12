import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index.js';
import Storefront from './components/storefront/storefront.js';

function App() {

  return (
    <Provider store={store} >
      <Storefront />
    </Provider>
  );
};

export default App;

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     products:state.products
//   }
// }
// export default connect(mapStateToProps, null)(App);
