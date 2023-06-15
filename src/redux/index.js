import {configureStore} from '@reduxjs/toolkit';
import modalReducer from "./reducers/modalReducer";
import authReducer from "./reducers/authSlice."
import productSlice from "./reducers/productSlice";
import vacancySlice from "./reducers/VacancySlice";
import levelSlice from "./reducers/levelSlice";
import categorySlice from "./reducers/categorySlice";
import postSlice from "./reducers/postSlice";


const store = configureStore({
    reducer: {
        modal: modalReducer,
        auth: authReducer,
        product: productSlice,
        vacancy: vacancySlice,
        levels:levelSlice,
        category: categorySlice,
        posts: postSlice


    },
});

export default store;