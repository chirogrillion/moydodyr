import React from 'react';

import './Content.css';

import ProductCard from '../Content/ProductCard/ProductCard';

const products = require('../../../assets/products.json');

function Content() {

  return (
    <section className="Content">
      {products.map(v =>
        <ProductCard
          key={v.code}
          code={v.code}
          name={v.name}
          imgURL={v.imgURL}
          price={v.price}
          percentOff={v.percentOff}
        />
      )}
    </section>
  );

};

export default Content;