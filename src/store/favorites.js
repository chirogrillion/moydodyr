import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {

    addToFavorites: (state, action) => {
      state.push(action.payload);
    },

    removeFromFavorites: (state, action) => {
      const index = state.findIndex(v => v === action.payload);
      state.splice(index, 1);
    },

  },
});

export const {addToFavorites, removeFromFavorites} = favorites.actions;

export default favorites.reducer;