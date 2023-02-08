import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './AddToCart.css';

import QuantityInput from '../QuantityInput/QuantityInput';
import {changeProductQuantity} from '../../../../../store/cart';

const AddToCart = props => {

  const products = useSelector(state => state.productsInCart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(changeProductQuantity({code: props.productId, quantity: 1}));
  };

  return (
    <div className="AddToCart">{
      products[props.productId]
        ? <QuantityInput number={products[props.productId]}/>
        : <button
          className="AddToCart-button"
          type="button"
          onClick={addToCart}
        >В корзину</button>
    }</div>
  );

};

export default AddToCart;