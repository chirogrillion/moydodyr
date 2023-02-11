import React from 'react';
import PropTypes from 'prop-types';
import {Routes, Route} from 'react-router-dom';

import './Catalog.css';

import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogTable from './CatalogTable/CatalogTable';

class Catalog extends React.PureComponent {

  static propTypes = {
    list: PropTypes.array.isRequired,
  };

  render() {
    return (
      <section className="Catalog">
        <CatalogFilters categoryId={this.props.categoryId}/>
        <Routes>
          <Route path="" element={<CatalogTable products={this.props.list} categoryId={this.props.categoryId}/>}/>
          <Route path=":page" element={<CatalogTable products={this.props.list} categoryId={this.props.categoryId}/>}/>
        </Routes>
      </section>
    );
  };

}

export default Catalog;