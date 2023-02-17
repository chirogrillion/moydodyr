import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    changeProductQuantity: (state, action) => {
      action.payload.quantity > 0
        ? state[action.payload.code] = action.payload.quantity
        : delete state[action.payload.code]
    },

    removeProducts: (state, action) => {
      action.payload.forEach(v => delete state[v]);
    },

  },
});

export const {changeProductQuantity, removeProducts} = cart.actions;

export default cart.reducer;