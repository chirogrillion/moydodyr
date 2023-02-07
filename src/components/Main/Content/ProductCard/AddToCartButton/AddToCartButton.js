import React from 'react';

import './AddToCartButton.css';

const AddToCartButton = props => {

  return (
    <button
      className={props.state === 'active' ? 'AddToCartButton' : 'AddToCartButton-disabled'}
    >В корзину</button>
  );

};

export default AddToCartButton;