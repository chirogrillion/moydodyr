import React from 'react';

import './Main.css';

import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

function Main() {
  return (
    <main className="Main">
      <div className="Main-container">
        <header><h1>Каталог</h1></header>
        <Sidebar/>
        <Content/>
      </div>
    </main>
  );
};

export default Main;