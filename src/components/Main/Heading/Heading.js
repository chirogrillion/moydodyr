import React from 'react';
import {Link} from 'react-router-dom';

import './Heading.css';

const Heading = props => {

  let breadcrumbs;
  let currPage;

  if (props.path) {
    breadcrumbs = [...props.path];
    currPage = breadcrumbs.pop();
  }

  const title = currPage ? currPage.name : props.title;

  const getLayout = arr => arr.map(v => <li key={v.code}>
    <Link to={`/catalog/${v.code}`}>{v.name}</Link>
  </li>);

  return (

    <header className="Heading">

      {breadcrumbs ? (breadcrumbs.length > 0 ? (
        <ul className="Heading-breadcrumbs">
          {getLayout(breadcrumbs)}
        </ul>
      ) : null) : null}

      <div className="Heading-title">
        <h1>{title}</h1>
        {props.listLength ? (
          <span>{props.listLength}</span>
        ) : null}
      </div>

      {currPage ? (currPage.sub ? (
        <ul className="Heading-subcategories">
          {getLayout(currPage.sub)}
        </ul>
      ) : null) : null}

    </header>

  );

};

export default Heading;