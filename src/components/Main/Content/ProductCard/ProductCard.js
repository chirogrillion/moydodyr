import React from 'react';

import './ProductCard.css';

import FavoriteToggle from './FavoriteToggle/FavoriteToggle';
import {formatPrice} from '../../../formatPrice';
import AddToCart from './AddToCart/AddToCart';

const ProductCard = props => {

  return (
    <article
      className="ProductCard"
    >
      <div className="ProductCard-img">
        <img src={props.imgURL} alt={props.name}/>
        <FavoriteToggle productId={props.code}/>
        {props.percentOff > 0 ? (
          <div className="ProductCard-discount">{props.percentOff}</div>
        ) : null}
      </div>
      <div className="ProductCard-price_wrapper">{
        props.percentOff > 0
          ? <React.Fragment>
            <p className="ProductCard-old_price">{formatPrice(props.price)}</p>
            <p className="ProductCard-price">{formatPrice(props.price * (100 - props.percentOff) / 100)}</p>
          </React.Fragment>
          : <p className="ProductCard-price">{formatPrice(props.price)}</p>
      }</div>
      <h3>{props.name}</h3>
      <AddToCart productId={props.code}/>
    </article>
  );

};

export default ProductCard;