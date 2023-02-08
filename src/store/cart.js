import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  productsInCart: {},
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeProductQuantity: (state, action) => {
      action.payload.quantity > 0
        ? state.productsInCart[action.payload.code] = action.payload.quantity
        : delete state.productsInCart[action.payload.code]
    },
  },
});

export const {changeProductQuantity} = cart.actions;

export default cart.reducer;