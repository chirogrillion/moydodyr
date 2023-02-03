import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
const logo = require('../assets/logo/moydodyr-with_text.png');
const miniLogo = require('../assets/logo/moydodyr.png');

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <section className="logo">
          <img src={logo}/>
        </section>
        <section className="Header-contacts">
          <a className="link-location">Минск</a>
          <div className="Header-call_center">
            <a className="link-tel">656-32-32</a>
            <span>с 9:00 до 21:00</span>
          </div>
          <ul className="Header-consumer_info">
            <li><a>Пункты выдачи</a></li>
            <li><a>Доставка</a></li>
            <li><a>Оплата</a></li>
            <li><a>Акции</a></li>
          </ul>
        </section>
        <SearchBar/>
        <nav>
          <ul className="Header-categories-popular">
            <li><a>Стирка</a></li>
            <li><a>Мытьё посуды</a></li>
            <li><a>Чистка кухни</a></li>
            <li><a>Чистка санузла</a></li>
            <li><a>Инвентарь для уборки</a></li>
          </ul>
          <a className="link-more">Больше</a>
        </nav>
        <section className="Header-categories-all"></section>
        <section className="Header-user">
          <CartButton/>
          <button
            className="Header-account"
            type="button"
          >Войти</button>
        </section>
      </div>
    </header>
  );
};

export default Header;