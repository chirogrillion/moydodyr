import React from 'react';

import './Footer.css';

const logo = require('../../assets/logo/moydodyr.png');

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <p>&copy; 2023 ООО &laquo;Чистый дом&raquo;</p>
        <img src={logo} alt="Мойдодыр"/>
        <p>Разработка сайта: Стёпин Сергей</p>
      </div>
    </footer>
  );
};

export default Footer;