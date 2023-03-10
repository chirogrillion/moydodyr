import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './FavoriteToggle.css';

import {addToFavorites, removeFromFavorites} from '../../../store/favorites';

const FavoriteToggle = props => {

  const isFavorite = useSelector(state => state.favorites.findIndex(v => v === props.productId));
  const dispatch = useDispatch();

  const add = () => dispatch(addToFavorites(props.productId));
  const remove = () => dispatch(removeFromFavorites(props.productId));

  return (
    <div className="FavoriteToggle">{
      isFavorite === -1
        ? <button
          key={1}
          className="FavoriteToggle-hiding"
          type="button"
          title="Добавить в Избранное"
          onClick={add}
        >&#xf004;</button>
        : <button
          key={1}
          className="button-red"
          type="button"
          title="Удалить из Избранного"
          onClick={remove}
        >&#xf004;</button>
    }</div>
  );

};

export default FavoriteToggle;