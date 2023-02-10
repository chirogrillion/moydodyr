import React from 'react';

import './PageHeading.css';

const categories = require('../../../assets/categories.json');

const PageHeading = props => {

  return (
    <header className="PageHeading">
      <h1>{}</h1>
    </header>
  );

};

export default PageHeading;