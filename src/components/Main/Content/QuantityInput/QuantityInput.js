import React from 'react';
import {useDispatch} from 'react-redux';
import { changeProductQuantity } from '../../../../store/cart';

import './QuantityInput.css';

const QuantityInput = props => {

  const dispatch = useDispatch();

  const notifyStore = (num) => {
    if (num <= props.productUnitsAvailable) {dispatch(
      changeProductQuantity({code: props.productId, quantity: num})
    )}
  };

  const quantityChanged = eo => notifyStore(parseInt(eo.target.value));

  const quantityMinus1 = () => {
    const currValue = Number(props.productQuantity);
    if (currValue >= 1) {
      notifyStore(currValue - 1);
    }
  };

  const quantityPlus1 = () => {
    const currValue = Number(props.productQuantity);
    notifyStore(currValue + 1);
  };

  return (
    <div className="QuantityInput">
      <button
        className="QuantityInput-minus"
        type="button"
        onClick={quantityMinus1}
      >&#8722;</button>
      <input
        type="number"
        min={0}
        step={1}
        max={props.productUnitsAvailable}
        value={props.productQuantity}
        onChange={quantityChanged}
      />
      <button
        className={
          props.productQuantity >= props.productUnitsAvailable
            ? 'QuantityInput-plus button-disabled'
            : 'QuantityInput-plus'
        }
        type="button"
        onClick={quantityPlus1}
      >+</button>
    </div>
  );

};

export default QuantityInput;