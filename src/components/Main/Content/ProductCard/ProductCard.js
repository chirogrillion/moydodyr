import React, {useState} from 'react';

import './ProductCard.css';

import {formatPrice} from '../../../formatPrice';
import QuantityInput from './QuantityInput/QuantityInput';
import AddToCartButton from './AddToCartButton/AddToCartButton';

const ProductCard = props => {

  const [quantity, setQuantity] = useState(1);

  const quantityChanged = num => setQuantity(num);

  return (
    <article
      className="ProductCard"
    >
      <img src={props.imgURL} alt={props.name}/>
      <h3>{props.name}</h3>
      {
        props.percentOff > 0
          ? <React.Fragment>
            <div className="ProductCard-discount">{props.percentOff}</div>
            <div className="ProductCard-price_wrapper">
              <p className="ProductCard-old_price">{formatPrice(props.price)}</p>
              <p className="ProductCard-price">{formatPrice(props.price * (100 - props.percentOff) / 100)}</p>
            </div>
          </React.Fragment>
          : <p className="ProductCard-price">{formatPrice(props.price)}</p>
      }
      <div className="ProductCard-add_to_cart">
        <QuantityInput
          number={quantity}
          cbQuantityChanged={quantityChanged}
        />
        <AddToCartButton
          state={(Number.isInteger(Number(quantity)) && quantity >= 1) ? 'active' : 'disabled'}
        />
      </div>
    </article>
  );

};

export default ProductCard;