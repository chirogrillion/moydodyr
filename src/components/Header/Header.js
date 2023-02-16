import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

import HeaderButton from './HeaderButton/HeaderButton';
import Menu from './Menu/Menu';
import SearchBar from './SearchBar/SearchBar';
import CartButton from './HeaderButton/CartButton';

const maxiLogo = require('../../assets/logo/moydodyr-with_text.png');
const miniLogo = require('../../assets/logo/moydodyr.png');

class Header extends React.PureComponent {

  state = {
    isHeaderSticky: false,
    isMenuShown: false,
    isSearchBarShown: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.shouldHeaderStick);
    window.addEventListener('resize', this.shouldHeaderStick);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.shouldHeaderStick);
    window.removeEventListener('resize', this.shouldHeaderStick);
  };

  shouldHeaderStick = () => {
    if (window.innerWidth > 910) {
      if (window.scrollY >= 160) {
        this.setState({
          isHeaderSticky: true,
          isMenuShown: false,
          isSearchBarShown: false,
        });
      }
      else {
        this.resetState();
      }
    }
    else {
      this.setState({
        isHeaderSticky: false,
      });
    }
  };

  resetState = () => this.setState({
    isHeaderSticky: false,
    isMenuShown: false,
    isSearchBarShown: false,
  });

  toggleMenu = () => {
    if (this.state.isMenuShown) {
      this.resetState();
    }
    else {
      this.setState({
        isHeaderSticky: false,
        isMenuShown: true,
        isSearchBarShown: false,
      });
    }
  };

  toggleSearchBar = () => {
    if (this.state.isSearchBarShown) {
      this.resetState();
    }
    else {
      this.setState({
        isHeaderSticky: false,
        isMenuShown: false,
        isSearchBarShown: true,
      });
    }
  };

  render() {
    return (
      <header className={this.state.isHeaderSticky ? 'Header sticky' : 'Header'}>
        <div className="Header-container">
          <section className="Header-buttons-left">
            <HeaderButton
              cls={this.state.isMenuShown
                ? 'clicked'
                : null}
              icon="&#xf0c9;"
              byClick={this.toggleMenu}
            >Меню</HeaderButton>
            <HeaderButton
              cls={this.state.isSearchBarShown
                ? 'clicked'
                : null}
              icon="&#xf002;"
              byClick={this.toggleSearchBar}
            >Поиск</HeaderButton>
          </section>
          <Menu
            cls={this.state.isMenuShown ? 'shown' : null}
            cbHide={this.resetState}
          />
          <SearchBar
            cls={this.state.isSearchBarShown ? 'shown' : null}
            cbHide={this.resetState}
          />
          <Link to="/catalog/0" className="Header-logo">
            <img id="Header-logo-maxi" src={maxiLogo} alt="Мойдодыр"/>
            <img id="Header-logo-mini" src={miniLogo} alt="Мойдодыр"/>
          </Link>
          <section className="Header-buttons-right">
            <HeaderButton
              icon="&#xf004;"
            >Избранное</HeaderButton>
            <CartButton/>
          </section>
        </div>
      </header>
    );
  };

}

export default Header;