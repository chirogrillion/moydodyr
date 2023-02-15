import React, {useEffect} from 'react';

import './Menu.css';

import {toggleMenu} from '../toggleMenu';

const Menu = () => {

  useEffect(() => {
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  }, []);

  const hideMenu = () => {
    if (window.innerWidth > 910) {
      document.querySelector('.MenuButton').classList.remove('clicked');
      document.querySelector('.Menu').classList.remove('shown');
    }
  };

  return (
    <section className="Menu">
      <ul className="Menu-container">
        <li><ul>
          <li>
            <a className="link-location">Минск</a>
          </li>
          <li className="Menu-call_center">
            <a className="link-tel">656-32-32</a>
            <span>&bull;</span>
            <span>9:00&mdash;21:00</span>
          </li>
        </ul></li>
        <li><ul className="Menu-consumer_info">
          <li><a>Пункты выдачи</a></li>
          <li><a>Доставка</a></li>
          <li><a>Оплата</a></li>
          <li><a>Акции</a></li>
          <li><a>Личный кабинет</a></li>
        </ul></li>
      </ul>
      <div
        className="Menu-overlay"
        onClick={toggleMenu}
      ></div>
    </section>
  );

};

export default Menu;