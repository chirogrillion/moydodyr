import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import './CartButton.css';

const CartButton = () => {
  const cart = useSelector(state => state.cart);
  const cartNumber = Object.values(cart).reduce((r, v) => r + v, 0);
  return (
    <Link to="/cart"><button
      className="CartButton button-filled"
      type="button"
    >
      Корзина
      {cartNumber > 0 ? (
        <div className="CartButton-label">{cartNumber}</div>
      ) : null}
    </button></Link>
  );
};

export default CartButton;