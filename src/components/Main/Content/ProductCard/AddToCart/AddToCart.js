import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './AddToCart.css';

import QuantityInput from '../QuantityInput/QuantityInput';
import {changeProductQuantity} from '../../../../../store/cart';

const AddToCart = props => {

  console.log('render' + props.productId);

  const productQuantity = useSelector(state => state.cart[props.productId]);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(changeProductQuantity({code: props.productId, quantity: 1}));
  };

  return (
    <div className="AddToCart">{
      productQuantity
        ? <QuantityInput number={productQuantity}/>
        : <button
          className="AddToCart-button"
          type="button"
          onClick={addToCart}
        >В корзину</button>
    }</div>
  );

};

export default AddToCart;