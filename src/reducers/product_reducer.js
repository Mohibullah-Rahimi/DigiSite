const productsReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_MENU":
            return { ...state, openMenu: !state.openMenu };
        case "SHOW_LOADING":
            return { ...state, loading: true };
        case "GET_PRODUCTS":
            return { ...state, loading: false, products: action.payload };
        case "GET_SINGLE_PRODUCT":
            return { ...state, loading: false, singleProduct: { ...action.payload.singleProduct } };
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default productsReducer;
