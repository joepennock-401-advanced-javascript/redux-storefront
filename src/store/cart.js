// logic to update the cart 

const initialState = {
    products: [],
    categories: []
}

export default function reducer (state=initialState, action) {
    const {type, payload} = action;
    console.log(state);
    switch(type) {
        case "INITIALIZE": 
            return payload;
        default: 
            return state; 
    }
}