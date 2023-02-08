import React from 'react';
import {useSelector} from 'react-redux';

import './CartButton.css';

function CartButton() {
  const productsInCart = useSelector(state => state.cart);
  return (
    <button
      className="CartButton"
      type="button"
    >
      Корзина
      <div className="CartButton-label">{Object.keys(productsInCart).length}</div>
    </button>
  );
};

export default CartButton;