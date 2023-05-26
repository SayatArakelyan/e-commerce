import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "./reducers/modalReducer";
import authReducer from "./reducers/authSlice."
import productSlice from "./reducers/productSlice";

const store = configureStore({
    reducer: {
        modal: modalReducer,
        auth: authReducer,
        product: productSlice


    },
});

export default store;