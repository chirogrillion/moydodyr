import {configureStore} from '@reduxjs/toolkit';

import catalogReducer from './catalog';
import cartReducer from './cart';
import favoritesReducer from './favorites';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export {store};