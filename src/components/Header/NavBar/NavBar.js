import React from 'react';

import './NavBar.css';

function NavBar() {
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
        <article>
          <h1><a>Бытовая химия</a></h1>
          <article>
            <h2><a>Средства для стирки</a></h2>
            <ul>
              <li><a>Стиральные порошки</a></li>
              <li><a>Отбеливатели</a></li>
              <li><a>Капсулы для стирки</a></li>
              <li><a>Гели для стирки</a></li>
              <li><a>Ополаскиватели для белья</a></li>
              <li><a>Пятновыводители</a></li>
            </ul>
          </article>
        </article>
      </section>
    </section>
  );
};

export default NavBar;