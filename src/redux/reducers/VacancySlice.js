import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../constants/api';


export const fetchVacancies = createAsyncThunk('vacancies/fetchVacancies', async (params, {}) => {
    const response = await axios.get(`${API_URL}/vacancy`, {params});
    return response.data;
});

export const filterVacancies = createAsyncThunk('vacancies/filterVacancies', async (_, {getState}) => {
    const state = getState();
    console.log(state)
    const {selectedCategory, selectedLevel} = state; // Replace with the correct selectors

    const params = {
        categoryId: selectedCategory,
        levelId: selectedLevel,
    };

    console.log(params)
    const response = await axios.get(`${API_URL}/vacancy`, {params});
    return response.data;
});


const vacancySlice = createSlice({
    name: 'vacancies',
    initialState: {
        vacancies: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVacancies.fulfilled, (state, action) => {
                state.loading = false;
                state.vacancies = action.payload;
            })
            .addCase(fetchVacancies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(filterVacancies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(filterVacancies.fulfilled, (state, action) => {
                state.loading = false;
                state.vacancies = action.payload;
            })
            .addCase(filterVacancies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});




export default vacancySlice.reducer;