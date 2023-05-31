import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../constants/api';

export const fetchLevels = createAsyncThunk('levels/fetchLevels', async () => {
    const response = await axios.get(`${API_URL}/vacancy/specialistLevel`);
    return response.data;
});

const levelSlice = createSlice({
    name: 'levels',
    initialState: {
        levels: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLevels.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLevels.fulfilled, (state, action) => {
                state.loading = false;
                state.levels = action.payload;
            })
            .addCase(fetchLevels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const selectLevels = (state) => state.levels.levels;
export const selectLevelsLoading = (state) => state.levels.loading;
export const selectLevelsError = (state) => state.levels.error;

export default levelSlice.reducer;
