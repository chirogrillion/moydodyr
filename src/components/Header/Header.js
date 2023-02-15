import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

import MenuButton from './HeaderButton/MenuButton';
import Menu from './Menu/Menu';
import SearchButton from './HeaderButton/SearchButton';
import SearchBar from './SearchBar/SearchBar';
import FavoritesButton from './HeaderButton/FavoritesButton';
import CartButton from './HeaderButton/CartButton';

const maxiLogo = require('../../assets/logo/moydodyr-with_text.png');
const miniLogo = require('../../assets/logo/moydodyr.png');

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleStickyClass);
    window.addEventListener('resize', toggleStickyClass);
    return () => {
      window.removeEventListener('scroll', toggleStickyClass);
      window.removeEventListener('resize', toggleStickyClass);
    };
  }, []);

  const toggleStickyClass = () => {
    const viewportWidth = window.innerWidth;
    const scrollTop = window.scrollY;
    if (viewportWidth > 910) {
      if (scrollTop >= 160) {
        setIsSticky(true);
      }
      else {
        setIsSticky(false);
      }
    }
    else {
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