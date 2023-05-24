import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModalVisible: false,
        onClickOutside: false,
    },
    reducers: {
        showModal: (state) => {
            state.isModalVisible = true;
        },
        hideModal: (state) => {
            state.isModalVisible = false;
        },
        setClickOutside: (state, action) => {
            state.onClickOutside = action.payload;
        },
    },
});

export const { showModal, hideModal, setClickOutside } = modalSlice.actions;

export default modalSlice.reducer;
