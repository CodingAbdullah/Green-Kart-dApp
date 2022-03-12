const initialState = {
    cart: ""
};

export const shoppingReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "REQUEST_CHECKOUT":
            return {
                ...state,
                cart: payload
            }
        default:
            return {
                ...state
            };
    }
}