import React from 'react';
import {useSelector} from 'react-redux';

import Heading from '../components/Main/Heading/Heading';
import Cart from '../components/Main/Cart/Cart';

const CartPage = () => {

  const catalog = useSelector(state => state.catalog);

  return (
    <React.Fragment>
      <Heading title="Корзина"/>
      <Cart/>
    </React.Fragment>
  );
};

export default CartPage;