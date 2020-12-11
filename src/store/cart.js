// logic to update the cart 

const initialState = {
    products: [],
    categories: []
}

const reducer = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case "INITIALIZE": 
            return payload;
        default: 
            return state; 
    }
}

export default reducer;