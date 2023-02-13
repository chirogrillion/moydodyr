import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './Cart.css';

import {changeProductQuantity} from '../../../store/cart';
import {formatPrice} from '../formatPrice';
import QuantityInput from '../QuantityInput/QuantityInput';

const Cart = props => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [checkedItems, setCheckedItems] = useState([]);

  const checkboxClicked = eo => {
    const itemCode = Number(eo.target.name);
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
    let ids = Object.keys(cart);
    console.log(ids);
    ids = ids.map(v => Number(v));
    console.log(ids);
    const cartItems = props.catalog.filter(
      v => ids.includes(v.code)
    );
    console.log(cartItems);
    return cartItems.map(v => <tr key={v.code}>
      <td><input
        type="checkbox"
        name={v.code}
        checked={checkedItems.includes(v.code)}
        onChange={checkboxClicked}
      /></td>
      <td><img src={v.imgURL} alt={v.name}/></td>
      <td>{v.name}</td>
      <td>{
        v.percentOff > 0
          ? <React.Fragment>
            <span className="old_price">{formatPrice(v.price)}</span>
            <span className="price">{formatPrice(v.price * (100 - v.percentOff) / 100)}</span>
          </React.Fragment>
          : <span className="price">{formatPrice(v.price)}</span>
      }</td>
      <td>
        <QuantityInput
          productId={v.code}
          productUnitsAvailable={v.unitsAvailable}
          productQuantity={cart[String(v.code)]}
        />
      </td>
      <td>{formatPrice(v.price * cart[String(v.code)])}</td>
      <td></td>
    </tr>);
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