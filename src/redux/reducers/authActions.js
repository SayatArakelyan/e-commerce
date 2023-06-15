import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {API_URL} from "../../constants/api";


export const registerUser = createAsyncThunk(
    'auth/register',
    async ({
               image,
               Email,
               password,
               FirstName,
               LastName,
               BirthDate,
               gender,
               country,
               phoneNumber
           }, {rejectWithValue}) => {
        try {


            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": JSON.parse(localStorage.getItem("user")),
                },
            }
            await axios.post(
                `${API_URL}/auth/register`,
                {image, Email, password, FirstName, LastName, BirthDate, gender, country, phoneNumber},
                config
            )
        } catch (error) {

            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const login = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        if (response.data.jwt) {
            localStorage.setItem('user', JSON.stringify(response.data.jwt));
        }
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const logout = createAsyncThunk('user/logout', () => {
    localStorage.removeItem('user');
});

