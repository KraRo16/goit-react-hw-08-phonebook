import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, { payload }) => {
      state.filter = payload.toLowerCase();
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
