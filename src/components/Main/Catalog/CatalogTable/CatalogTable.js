import React from 'react';
import PropTypes from 'prop-types';
import {useParams, Link} from 'react-router-dom';

import './CatalogTable.css';

import ProductCard from '../../ProductCard/ProductCard';

const CatalogTable = props => {

  const params = useParams();
  const prodsNum = props.prodsList.length;
  const prodsPerPage = props.prodsPerPage;
  const pagesNum = Math.ceil(prodsNum / prodsPerPage);
  const page = params.page ? (
    Number(params.page) > pagesNum ? 1 : Number(params.page)
  ) : 1;

  const prodsPerPageValues = [20, 40, 60];

  const prodsPerPageChanged = eo => {
    props.cbProdsPerPageChanged(Number(eo.target.value))
  };

  const getSwitcherLayout = arr => {
    return arr.map((v, i) => (
      <label
        key={i}
        className={prodsPerPage === v ? 'current' : null}
      >
        <input
          type="radio"
          name="products_per_page"
          value={v}
          checked={prodsPerPage === v}
          onChange={prodsPerPageChanged}
        />
        {v}
      </label>
    ));
  };

  const start = (page - 1) * prodsPerPage;
  const _end = start + prodsPerPage;
  const end = _end > prodsNum ? prodsNum : _end;
  const displayedProds = props.prodsList.slice(start, end);

  const scrollToTop = () => window.scrollTo({
    top: 0, left: 0, behavior: 'smooth',
  });

  const getPaginationLayout = () => {

    let links = [];

    if (page !== 1) {
      links.push(
        <Link
          key={0}
          to={`${props.url}/${page - 1}`}
          className="arrow"
          onClick={scrollToTop}
        >&#xf060;</Link>
      );
    }

    for (let i = 0; i < pagesNum; i++) {
      links.push(
        <Link
          key={i + 1}
          to={`${props.url}/${i + 1}`}
          className={i + 1 === page ? 'current' : null}
          onClick={scrollToTop}
        >{i + 1}</Link>
      );
    }

    if (page !== pagesNum) {
      links.push(
        <Link
          key={pagesNum + 1}
          to={`${props.url}/${page + 1}`}
          className="arrow"
          onClick={scrollToTop}
        >&#xf061;</Link>
      );
    }

    return links;

  };

  return (

    <section className="CatalogTable">

      <header>
        <p>Найдено товаров: <span style={{fontWeight: 500}}>
          {prodsNum}
        </span></p>
        <div className="CatalogTable-products_per_page">
          <p>Товаров на странице:</p>
          <div className="CatalogTable-switcher">
            {getSwitcherLayout(prodsPerPageValues)}
          </div>
        </div>
      </header>

      <main>
        {displayedProds.map(v =>
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

      {prodsNum < 1 ? null : (
        <footer>
          <p>Показаны товары: <span style={{fontWeight: 500}}>
            {start + 1}&mdash;{end}
          </span></p>
          <div className="CatalogTable-pagination">
            {getPaginationLayout()}
          </div>
        </footer>
      )}

    </section>

  );

};

CatalogTable.propTypes = {
  url: PropTypes.string.isRequired,
  prodsList: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    percentOff: PropTypes.number.isRequired,
    unitsAvailable: PropTypes.number.isRequired,
  })),
  prodsPerPage: PropTypes.number.isRequired,
  cbProdsPerPageChanged: PropTypes.func.isRequired,
};

export default CatalogTable;