import React from 'react';

import './NavBar.css';

const categories = require('../../../assets/categories.json');

function NavBar() {

  const getLayout = (arr) => {
    console.log('getLayout()');
    return arr.map(v => {
      <article key={v.code}>
        <a>{v.name}</a>
        {v.sub ? getLayout(v.sub) : null}
      </article>
    });
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
        {getLayout(categories)}
      </section>
    </section>
  );

};

export default NavBar;