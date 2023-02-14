import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  1101001: 2,
  1202001: 1,
  1102001: 1,
  1103001: 1,
  1201001: 5,
};

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