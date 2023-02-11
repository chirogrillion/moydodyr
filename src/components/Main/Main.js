import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './Main.css';

import CatalogPage from '../../pages/CatalogPage';

function Main() {
  return (
    <main className="Main">
      <div className="Main-container">
        <Routes>
          <Route path="/*" element={<CatalogPage/>}/>
          <Route path="/catalog/:ctgrid/*" element={<CatalogPage/>}/>
        </Routes>
      </div>
    </main>
  );
};

export default Main;