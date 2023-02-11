import React from 'react';
import {Link} from 'react-router-dom';

import './Heading.css';

const Heading = props => {

  let breadcrumbs = [...props.path];
  const thisPage = breadcrumbs.pop();

  const getLayout = arr => arr.map(v => <li key={v.code}>
    <Link to={`/catalog/${v.code}`}>{v.name}</Link>
  </li>);

  return (

    <header className="Heading">

      {breadcrumbs.length > 0 ? (
        <ul className="Heading-breadcrumbs">
          {getLayout(breadcrumbs)}
        </ul>
      ) : null}

      <h1>{thisPage.name}</h1>

      {thisPage.sub ? (
        <ul className="Heading-subcategories">
          {getLayout(thisPage.sub)}
        </ul>
      ) : null}

    </header>

  );

};

export default Heading;