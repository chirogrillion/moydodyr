import React from 'react';
import {useSelector} from 'react-redux';

import Heading from '../components/Main/Heading/Heading';
import Cart from '../components/Main/Cart/Cart';

const CartPage = () => {

  const catalog = useSelector(state => state.catalog);

  const flatten = arr => {
    let flatArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].content) {
        flatArr.push(...arr[i].content);
      }
      else {
        let r = flatten(arr[i].sub);
        flatArr.push(...r);
      }
    }
    return flatArr;
  };

  const flattenedCatalog = flatten(catalog);

  return (
    <React.Fragment>
      <Heading title="Корзина"/>
      <Cart catalog={flattenedCatalog}/>
    </React.Fragment>
  );
};

export default CartPage;