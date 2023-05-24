import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "./reducers/modalReducer";
import authReducer from "./reducers/authSlice."

const store = configureStore({
    reducer: {
        modal: modalReducer,
        auth: authReducer


    },
});

export default store;