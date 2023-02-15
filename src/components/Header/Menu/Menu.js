import React from 'react';

import './Menu.css';

const Menu = () => {
  return (
    <ul className="Menu">
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
  );
};

export default Menu;