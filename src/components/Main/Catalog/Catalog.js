import React from 'react';

import './Catalog.css';

import Filters from './Filters/Filters';
import ProductsTable from './ProductsTable/ProductsTable';

const Catalog = props => {

  return (
    <section className="Catalog">
      <Filters categoryId={props.categoryId}/>
      <ProductsTable categoryId={props.categoryId}/>
    </section>
  );

};

export default Catalog;