import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../constants/api';
import {AUTH_TOKEN} from "../../constants";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/customerMessage/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
});

export const deletePost = createAsyncThunk('posts/deletePost', async ({userId, postId}) => {
    try {
        // const response = await axios.delete(`${API_URL}/customerMessage/${userId}/${postId}`);
        const response = await axios.put(`${API_URL}/customerMessage/${postId}`, {}, {
            headers: {
                'Authorization': JSON.parse(localStorage.getItem('user')),
            }
        });
        console.log(response.data);
        return userId;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                return state.filter((post) => post.id !== action.payload);
            });
    },
});

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
