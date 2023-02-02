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
          <a className="Header-user_location">Минск</a>
          <div className="Header-call_center">
            <span>Колл-центр</span>
            <a>656-32-32</a>
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
        <ul className="Header-nav_bar">
          <li><a>Все товары</a></li>
          <li><a>Категория 1</a></li>
          <li><a>Категория 2</a></li>
          <li><a>Категория 3</a></li>
          <li><a>Категория 4</a></li>
          <li><a>Ещё</a></li>
        </ul>
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