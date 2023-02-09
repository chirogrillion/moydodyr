import React from 'react';
import {useSelector} from 'react-redux';

import './CartButton.css';

function CartButton() {
  const cart = useSelector(state => state.cart);
  const cartNumber = Object.values(cart).reduce((r, v) => r + v, 0);
  return (
    <button
      className="CartButton"
      type="button"
    >
      Корзина
      {cartNumber > 0 ? (
        <div className="CartButton-label">{cartNumber}</div>
      ) : null}
    </button>
  );
};

export default CartButton;