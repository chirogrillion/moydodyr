import React from 'react';

import './ProductCard.css';

import {formatPrice} from '../../../formatPrice';
import AddToCart from './AddToCart/AddToCart';

const ProductCard = props => {

  return (
    <article
      className="ProductCard"
    >
      <img src={props.imgURL} alt={props.name}/>
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
      <h3>{props.name}</h3>
      <AddToCart productId={props.code}/>
    </article>
  );

};

export default ProductCard;