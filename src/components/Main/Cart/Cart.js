import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './Cart.css';

import {changeProductQuantity} from '../../../store/cart';

const Cart = () => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  

  const getLayout = () => {
    return;
  };

  return (
    <main className="Cart">
      <table>
        <thead><tr>
          <th>Выбрать</th>
          <th>Фото</th>
          <th>Наименование</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Стоимость</th>
          <th>Управление</th>
        </tr></thead>
        <tbody>
          {getLayout()}
        </tbody>
      </table>
    </main>
  );

};

export default Cart;