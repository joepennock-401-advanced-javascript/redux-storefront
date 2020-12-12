const initialState = {
  categories: ['electronics', 'food'],
};

const categoriesReducer = ( state=initialState, action ) => {
  const {type, payload} = action;

  switch(type) {
    case "categories.INITIALIZE":
      return payload;
    default:
      return state;
  };
};

export default categoriesReducer;