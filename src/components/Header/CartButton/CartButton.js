import React from 'react';

import './CartButton.css';

function CartButton() {
  return (
    <button
      className="CartButton"
      type="button"
    >
      Корзина
      <div className="CartButton-label">0</div>
    </button>
  );
};

export default CartButton;