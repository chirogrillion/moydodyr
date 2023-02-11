import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './Catalog.css';

import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogTable from './CatalogTable/CatalogTable';

const products = require('../../../assets/products.json');

const Catalog = props => {

  return (
    <section className="Catalog">
      <CatalogFilters categoryId={props.categoryId}/>
      <Routes>
        <Route path="" element={<CatalogTable products={products}/>}/>
        <Route path=":page" element={<CatalogTable products={products}/>}/>
      </Routes>
    </section>
  );

};

export default Catalog;