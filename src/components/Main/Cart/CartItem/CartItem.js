import React from 'react';
import PropTypes from 'prop-types';

import './CartItem.css';

import {formatPrice} from '../../formatPrice';
import FavoriteToggle from '../../FavoriteToggle/FavoriteToggle';
import QuantityInput from '../../QuantityInput/QuantityInput';

const CartItem = props => {

  const checkboxClicked = eo => {
    props.cbCheckboxClicked(Number(eo.target.name));
  };

  return (
    <article className="CartItem">
      <div className="CartItem-part_1">
        <input
          name={props.code}
          type="checkbox"
          checked={props.isSelected}
          onChange={checkboxClicked}
        />
        <img src={props.imgURL} alt={props.name}/>
        <h3>{props.name}</h3>
        <FavoriteToggle productId={props.code}/>
      </div>
      <div className="CartItem-part_2">
        <p className="CartItem-price">{formatPrice(props.price * (100 - props.percentOff) / 100)}</p>
        <p>&#215;</p>
        <QuantityInput
          productId={props.code}
          productUnitsAvailable={props.unitsAvailable}
          productQuantity={props.quantity}
        />
        <p>=</p>
        <p className="CartItem-price">{formatPrice(props.price * (100 - props.percentOff) / 100 * props.quantity)}</p>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  code: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  percentOff: PropTypes.number.isRequired,
  unitsAvailable: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  cbCheckboxClicked: PropTypes.func.isRequired,
};

export default CartItem;