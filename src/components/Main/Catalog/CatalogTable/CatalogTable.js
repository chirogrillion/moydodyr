import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import './CatalogTable.css';

import ProductCard from '../../ProductCard/ProductCard';

const CatalogTable = props => {

  const [prodsPerPage, setProdsPerPage] = useState(20);

  const params = useParams();
  const page = params.page ? Number(params.page) : 1;

  const prodsPerPageChanged = eo => setProdsPerPage(Number(eo.target.value));

  console.log(prodsPerPage);

  return (
    <section className="CatalogTable">
      <header>
        <p className="CatalogTable-total_number">
          Товаров всего: <span style={{fontWeight: 500}}>
            {props.products.length}
          </span>
        </p>
        <div className="CatalogTable-products_per_page">
          <p>Товаров на странице:</p>
          <div className="CatalogTable-switcher">
            <label className={prodsPerPage === 20 ? 'current' : null}>
              <input
                type="radio"
                name="products_per_page"
                value={20}
                checked={prodsPerPage === 20}
                onChange={prodsPerPageChanged}
              />20
            </label>
            <label className={prodsPerPage === 40 ? 'current' : null}>
              <input
                type="radio"
                name="products_per_page"
                value={40}
                checked={prodsPerPage === 40}
                onChange={prodsPerPageChanged}
              />40
            </label>
            <label className={prodsPerPage === 60 ? 'current' : null}>
              <input
                type="radio"
                name="products_per_page"
                value={60}
                checked={prodsPerPage === 60}
                onChange={prodsPerPageChanged}
              />60
            </label>
          </div>
        </div>
      </header>
      <main>
        {props.products.map(v =>
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
      </main>
      <footer></footer>
    </section>
  );

};

export default CatalogTable;