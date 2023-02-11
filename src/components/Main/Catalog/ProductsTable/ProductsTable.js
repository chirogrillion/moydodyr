import React from 'react';

import './ProductsTable.css';

import ProductCard from '../../ProductCard/ProductCard';

const products = require('../../../../assets/products.json');

function ProductsTable() {

  return (
    <section className="ProductsTable">
      {products.map(v =>
        <ProductCard
          key={v.code}
          code={v.code}
          name={v.name}
          imgURL={v.imgURL}
          price={v.price}
          percentOff={v.percentOff}
          unitsAvailable={v.unitsAvailable}
        />
      )}
    </section>
  );

};

export default ProductsTable;