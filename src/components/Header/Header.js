import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

import MenuButton from './MenuButton/MenuButton';
import Menu from './Menu/Menu';
import SearchButton from './SearchButton/SearchButton';
import SearchBar from './SearchBar/SearchBar';
import FavoritesButton from './FavoritesButton/FavoritesButton';
import CartButton from './CartButton/CartButton';

const maxiLogo = require('../../assets/logo/moydodyr-with_text.png');
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
        <section className="Header-buttons-left">
          <MenuButton/>
          <SearchButton/>
        </section>
        <Menu/>
        <SearchBar/>
        <Link to="/catalog/0" className="Header-logo">
          <img id="Header-logo-maxi" src={maxiLogo} alt="Мойдодыр"/>
          <img id="Header-logo-mini" src={miniLogo} alt="Мойдодыр"/>
        </Link>
        <section className="Header-buttons-right">
          <FavoritesButton/>
          <CartButton/>
        </section>
      </div>
    </header>
  );

};

export default Header;