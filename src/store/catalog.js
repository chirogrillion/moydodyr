import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const catalog = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    refreshCatalog: (state, action) => {
      if (state.length === 0) {
        state.push(...action.payload);
      }
    },
  },
});

export const {refreshCatalog} = catalog.actions;

export default catalog.reducer;