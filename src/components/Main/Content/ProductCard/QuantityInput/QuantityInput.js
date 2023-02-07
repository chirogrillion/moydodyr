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
      <input
        className="QuantityInput-minus"
        type="button"
        value="&#8722;"
        onClick={quantityMinus1}
      />
      <input
        type="number"
        min={1}
        step={1}
        value={props.number}
        onChange={quantityChanged}
      />
      <input
        className="QuantityInput-plus"
        type="button"
        value="+"
        onClick={quantityPlus1}
      />
    </div>
  );

};

export default QuantityInput;