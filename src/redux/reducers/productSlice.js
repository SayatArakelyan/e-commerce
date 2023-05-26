import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from "../../constants/api";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: { products: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
