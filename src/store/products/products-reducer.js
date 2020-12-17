const initialState = {
  products: [
  'tv', 
  'ipad', 
  'flip phone', 
  'toaster'
  ],
};

// {title:'tv', description:'plain old boob tube'}, 
// {title:'ipad', description:'first gen ipad'}, 
// {title:'flip phone', description:'Sorry we dont have anything newer'}, 
// {title:'toaster', description:'toasts stuff'}

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