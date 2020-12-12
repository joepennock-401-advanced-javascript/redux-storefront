const initialState = {
  products: ['tv', 'ipad', 'flip phone', 'toaster'],
};

const productsReducer = (state=initialState, action) => {
  const {type, payload} = action;

  switch(type) {
      case "products.INITIALIZE": 
          return payload;
      default: 
          return state; 
  };
};

export default productsReducer;