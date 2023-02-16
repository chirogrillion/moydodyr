import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './Cart.css';

import {removeProducts} from '../../../store/cart';
import {getNumWord} from '../getNumWord';
import {formatPrice} from '../formatPrice';
import CartItem from './CartItem/CartItem';

const Cart = props => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    selectedItems: [],
    selectAllChecked: false,
  });

  const selectedItemsNumber = state.selectedItems.length;

  const cartItemsNumber = Object.values(cart).reduce((r, v) => r + v, 0);
  const cartItemsIds = Object.keys(cart).map(v => Number(v));
  const cartItems = props.catalog.filter(
    v => cartItemsIds.includes(v.code)
  );
  const totalPrice = cartItems
    .map(v => v.price * (100 - v.percentOff) / 100 * cart[String(v.code)])
    .reduce((r, v) => r + v, 0);

  const checkboxClicked = itemCode => {
    let newArray = [...state.selectedItems];
    if (state.selectedItems.includes(itemCode)) {
      const itemIndex = state.selectedItems.indexOf(itemCode);
      newArray.splice(itemIndex, 1);
    }
    else {
      newArray.push(itemCode);
    }
    const areAllSelected = newArray.length === cartItemsIds.length;
    setState({
      selectedItems: newArray, selectAllChecked: areAllSelected
    });
  };

  const selectAll = () => {
    if (state.selectAllChecked) {
      setState({
        selectedItems: [],
        selectAllChecked: false,
      });
    }
    else {
      setState({
        selectedItems: cartItemsIds,
        selectAllChecked: true,
      });
    }
  };

  const removeSelectedItems = () => {
    dispatch(removeProducts(state.selectedItems));
    setState({
      selectedItems: [],
      selectAllChecked: false,
    });
  };

  return (
    <section className="Cart">
      <header>
        <div>
          <label
            className={cartItemsIds.length === 0 ? 'disabled' : null}
          >
            <input
              type="checkbox"
              checked={state.selectAllChecked}
              onChange={selectAll}
            />
            Выделить все
          </label>
          <p>{selectedItemsNumber === 1 ? 'Выделен' : 'Выделены'} {selectedItemsNumber}&nbsp;{getNumWord(selectedItemsNumber, 'элемент', 'элемента', 'элементов')}</p>
        </div>
        <button
          type="button"
          className={selectedItemsNumber > 0 ? 'button-red' : 'button-red button-disabled'}
          onClick={removeSelectedItems}
        >Удалить выделенные</button>
      </header>
      <main>
        {cartItemsIds.length > 0 ? (cartItems.map(v => (
          <CartItem
            key={v.code}
            code={v.code}
            name={v.name}
            imgURL={v.imgURL}
            price={v.price}
            percentOff={v.percentOff}
            unitsAvailable={v.unitsAvailable}
            quantity={cart[String(v.code)]}
            isSelected={state.selectedItems.includes(v.code)}
            cbCheckboxClicked={checkboxClicked}
          />
        ))) : (
          <p className="Cart-empty">Корзина пуста.</p>
        )}
      </main>
      <footer>
        <div>
          <p>{cartItemsNumber}&nbsp;{getNumWord(cartItemsNumber, 'товар', 'товара', 'товаров')} на&nbsp;сумму</p>
          <p className="Cart-total_price">{formatPrice(totalPrice)}&nbsp;р.</p>
        </div>
        <button
          type="button"
          className={cartItemsNumber > 0 ? 'button-filled' : 'button-filled button-disabled'}
        >Оформить заказ</button>
      </footer>
    </section>
  );

};

export default Cart;