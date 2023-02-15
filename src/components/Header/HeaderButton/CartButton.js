import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import HeaderButton from './HeaderButton';

const CartButton = () => {
  const cart = useSelector(state => state.cart);
  const cartNumber = Object.values(cart).reduce((r, v) => r + v, 0);
  return (
    <Link to="/cart">
      <HeaderButton
        icon="&#xf291;"
        label={cartNumber}
      >Корзина</HeaderButton>
    </Link>
  );
};

export default CartButton;