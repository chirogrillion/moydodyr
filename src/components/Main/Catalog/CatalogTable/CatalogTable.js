import React, {useState} from 'react';
import {useParams, NavLink} from 'react-router-dom';

import './CatalogTable.css';

import ProductCard from '../../ProductCard/ProductCard';

const CatalogTable = props => {

  const [prodsPerPage, setProdsPerPage] = useState(2);

  const params = useParams();
  const productsNumber = props.products.length;
  const pagesNumber = Math.ceil(productsNumber / prodsPerPage);
  const page = params.page ? (Number(params.page) > pagesNumber ? 1 : Number(params.page)) : 1;

  const prodsPerPageChanged = eo => setProdsPerPage(Number(eo.target.value));

  const start = (page - 1) * prodsPerPage;
  const end0 = start + prodsPerPage;
  const end = end0 > productsNumber ? productsNumber : end0;
  const displayedProducts = props.products.slice(start, end);

  const categoryId = props.categoryId;

  console.log(pagesNumber);

  const getPagination = () => {
    let links = [];
    links.push(
      <NavLink
        key={0}
        to={`/catalog/${categoryId}/${page - 1}`}
        className={page === 1 ? 'arrow disabled' : 'arrow'}
      >&#xf060;</NavLink>
    );
    for (let i = 0; i < pagesNumber; i++) {
      links.push(
        <NavLink
          key={i + 1}
          to={`/catalog/${categoryId}/${i + 1}`}
          className={i + 1 === page ? 'current' : null}
        >{i + 1}</NavLink>
      );
    }
    links.push(
      <NavLink
        key={pagesNumber + 1}
        to={`/catalog/${categoryId}/${page + 1}`}
        className={page === pagesNumber ? 'arrow disabled' : 'arrow'}
      >&#xf061;</NavLink>
    );
    return links;
  };

  return (
    <section className="CatalogTable">
      <header>
        <p className="CatalogTable-total_number">
          Товаров всего: <span style={{fontWeight: 500}}>
            {productsNumber}
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
        {displayedProducts.map(v =>
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
      {productsNumber < 1 ? null : (
        <footer>
          <p className="CatalogTable-displayed_products">
            Показаны товары: <span style={{fontWeight: 500}}>
              {start + 1}&mdash;{end}
            </span>
          </p>
          <div className="CatalogTable-pagination">
            {getPagination()}
          </div>
        </footer>
      )}
    </section>
  );

};

export default CatalogTable;