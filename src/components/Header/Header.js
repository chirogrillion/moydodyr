import React from 'react';

import './Header.css';

import SearchBar from './SearchBar/SearchBar';
import CartButton from './CartButton/CartButton';
import AccountButton from './AccountButton/AccountButton';

const logo = require('../../assets/logo/moydodyr-with_text.png');
const miniLogo = require('../../assets/logo/moydodyr.png');

function Header() {
  return (
    <header className="Header">
      <div className="Header-container">
        <section className="Header-logo">
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
        <section className="Header-user">
          <CartButton/>
          <AccountButton/>
        </section>
      </div>
    </header>
  );
};

export default Header;