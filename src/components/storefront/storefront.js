import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import {useSelector} from 'react-redux';

function Storefront (props) {

  const products = useSelector( state => state.products);
  console.log(products);
  const categories = useSelector( state => state.categories);
  console.log(categories);

  // const dispatch = useDispatch();

  return (
    <>
      <Header />
        {/* {dispatch( products.addProduct(newProduct) )} */}
      <Footer />
    </>
  );
};

export default Storefront;