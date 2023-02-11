import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './Main.css';

import PageCatalog from '../../pages/PageCatalog';

function Main() {
  return (
    <main className="Main">
      <div className="Main-container">
        <Routes>
          <Route path="/" element={<PageCatalog/>}/>
          <Route path="/catalog/:ctgrid" element={<PageCatalog/>}/>
        </Routes>
      </div>
    </main>
  );
};

export default Main;