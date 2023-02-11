import React from 'react';
import {Link} from 'react-router-dom';

import './Heading.css';

const Heading = props => {

  let breadcrumbs = [...props.path];
  const currPage = breadcrumbs.pop();

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

      <div className="Heading-title">
        <h1>{currPage.name}</h1>
        {props.listLength ? (
          <span>{props.listLength}</span>
        ) : null}
      </div>

      {currPage.sub ? (
        <ul className="Heading-subcategories">
          {getLayout(currPage.sub)}
        </ul>
      ) : null}

    </header>

  );

};

export default Heading;