import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

import SearchBar from './SearchBar/SearchBar';
import FavoritesButton from './FavoritesButton/FavoritesButton';
import CartButton from './CartButton/CartButton';

const logo = require('../../assets/logo/moydodyr-with_text.png');
const miniLogo = require('../../assets/logo/moydodyr.png');

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickToTop);
    return () => {
      window.removeEventListener('scroll', stickToTop);
    };
  }, []);

  const stickToTop = () => {
    const scrollTop = window.scrollY;
    console.log(scrollTop);
    if (scrollTop >= 160) {
      setIsSticky(true);
    }
    else if (scrollTop < 160) {
      setIsSticky(false);
    }
  };

  return (
    <header className={isSticky ? 'Header sticky' : 'Header'}>
      <div className="Header-container">
        <Link to="/catalog/0" className="Header-logo">
          <img src={isSticky ? miniLogo : logo} alt="Мойдодыр"/>
        </Link>
        {isSticky ? null : (
          <section className="Header-contacts">
            <a className="link-location">Минск</a>
            <div className="Header-call_center">
              <a className="link-tel">+375 29 656-32-32</a>
              <span>с 9:00 до 21:00</span>
            </div>
            <ul className="Header-consumer_info">
              <li><a>Доставка и оплата</a></li>
              <li><a>Акции</a></li>
              <li><a>Личный кабинет</a></li>
            </ul>
          </section>
        )}
        <SearchBar/>
        <section className="Header-user">
          <FavoritesButton/>
          <CartButton/>
        </section>
      </div>
    </header>
  );

};

export default Header;