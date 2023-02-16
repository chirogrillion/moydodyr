import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Routes, Route} from 'react-router-dom';

import './Catalog.css';

import CatalogTable from './CatalogTable/CatalogTable';

const Catalog = props => {

  const [prodsPerPage, setProdsPerPage] = useState(20);

  const categoryId = props.categoryId;

  const elem = (
    <CatalogTable
      url={categoryId ? `/catalog/${categoryId}` : ''}
      prodsList={props.list}
      prodsPerPage={prodsPerPage}
      cbProdsPerPageChanged={num => setProdsPerPage(num)}
    />
  );

  return (
    <section className="Catalog">
      <Routes>
        <Route path="" element={elem}/>
        <Route path=":page" element={elem}/>
      </Routes>
    </section>
  );

};

Catalog.propTypes = {
  categoryId: PropTypes.number,
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    percentOff: PropTypes.number.isRequired,
    unitsAvailable: PropTypes.number.isRequired,
  })),
};

export default Catalog;