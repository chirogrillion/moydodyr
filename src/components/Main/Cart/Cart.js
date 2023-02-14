import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './Cart.css';

import {changeProductQuantity} from '../../../store/cart';
import CartItem from './CartItem/CartItem';

const Cart = props => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [checkedItems, setCheckedItems] = useState([]);

  const checkboxClicked = itemCode => {
    let newArray = [...checkedItems];
    if (checkedItems.includes(itemCode)) {
      const itemIndex = checkedItems.indexOf(itemCode);
      newArray.splice(itemIndex, 1);
    }
    else {
      newArray.push(itemCode);
    }
    setCheckedItems(newArray);
  };

  const getLayout = () => {
    const ids = Object.keys(cart).map(v => Number(v));
    const cartItems = props.catalog.filter(
      v => ids.includes(v.code)
    );
    return cartItems.map(v => (
      <CartItem
        key={v.code}
        code={v.code}
        name={v.name}
        imgURL={v.imgURL}
        price={v.price}
        percentOff={v.percentOff}
        unitsAvailable={v.unitsAvailable}
        quantity={cart[String(v.code)]}
        isSelected={checkedItems.includes(v.code)}
        cbCheckboxClicked={checkboxClicked}
      />
    ));
  };

  return (
    <section className="Cart">
      <header></header>
      <main>
        {getLayout()}
      </main>
      <footer></footer>
    </section>
  );

};

export default Cart;