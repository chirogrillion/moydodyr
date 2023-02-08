import React from 'react';

import './QuantityInput.css';

const QuantityInput = props => {

  const callback = value => props.cbQuantityChanged(value);

  const quantityChanged = eo => callback(eo.target.value);

  const quantityMinus1 = () => {
    const currValue = Number(props.number);
    if (currValue >= 2) {
      callback(currValue - 1);
    }
  };

  const quantityPlus1 = () => {
    const currValue = Number(props.number);
    callback(currValue + 1);
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
        min={1}
        step={1}
        value={props.number}
        onChange={quantityChanged}
      />
      <button
        className="QuantityInput-plus"
        type="button"
        onClick={quantityPlus1}
      >+</button>
    </div>
  );

};

export default QuantityInput;