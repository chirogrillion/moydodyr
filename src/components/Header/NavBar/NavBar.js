import React from 'react';

import './NavBar.css';

const categories = require('../../../assets/categories.json');

function NavBar() {

  function getLayout(arr) {
    let layout = [];
    arr.forEach(v => layout.push(
      <li key={v.code}>
        <a>{v.name}</a>
        {v.sub ? <ul>{getLayout(v.sub)}</ul> : null}
      </li>
    ));
    return layout;
  };

  return (
    <section className="NavBar">
      <ul className="NavBar-pop_categories">
        <li><a>Стирка</a></li>
        <li><a>Мытьё посуды</a></li>
        <li><a>Чистка кухни</a></li>
        <li><a>Чистка санузла</a></li>
        <li><a>Инвентарь для уборки</a></li>
      </ul>
      <a className="link-more">Больше</a>
      <section className="NavBar-all_categories">
        <ul>{getLayout(categories)}</ul>
      </section>
    </section>
  );

};

export default NavBar;