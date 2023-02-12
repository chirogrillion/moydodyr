import React from 'react';
import PropTypes from 'prop-types';
import {Routes, Route} from 'react-router-dom';

import './Catalog.css';

import CatalogFilters from './CatalogFilters/CatalogFilters';
import CatalogTable from './CatalogTable/CatalogTable';

class Catalog extends React.PureComponent {

  static propTypes = {
    categoryId: PropTypes.number,
    list: PropTypes.arrayOf(PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imgURL: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      percentOff: PropTypes.number.isRequired,
      unitsAvailable: PropTypes.number.isRequired,
      brand: PropTypes.number.isRequired,
      form: PropTypes.number.isRequired,
    })),
  };

  state = {
    prodsList: this.props.list,
    prodsPerPage: 20,
  };

  prodsPerPageChanged = num => {
    this.setState({prodsPerPage: num});
  };

  render() {

    const categoryId = this.props.categoryId;

    const elem = (
      <CatalogTable
        url={categoryId ? `/catalog/${categoryId}` : ''}
        prodsList={this.state.prodsList}
        prodsPerPage={this.state.prodsPerPage}
        cbProdsPerPageChanged={this.prodsPerPageChanged}
      />
    );

    return (
      <section className="Catalog">
        <CatalogFilters
          categoryId={categoryId}
        />
        <Routes>
          <Route path="" element={elem}/>
          <Route path=":page" element={elem}/>
        </Routes>
      </section>
    );
  };

}

export default Catalog;