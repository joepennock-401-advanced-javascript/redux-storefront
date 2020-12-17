import React from 'react';
import Header from '../header/header.js';
import Main from '../main/main.js';
import Footer from '../footer/footer.js';

function Storefront (props) {
 
  return (
    <>
      <Header />
      <Main/>
        {/* {dispatch( products.addProduct(newProduct) )} */}
      <Footer />
    </>
  );
};

export default Storefront;