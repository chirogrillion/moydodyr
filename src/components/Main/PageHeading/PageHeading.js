import React from 'react';
import {Link} from 'react-router-dom';

import './PageHeading.css';

const categories = require('../../../assets/categories.json');

const PageHeading = props => {

  const getPath = (arr) => {
    let path = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].code === props.pageId) {
        let sub = null;
        if (arr[i].sub) {
          sub = arr[i].sub.map(v => ({
            code: v.code,
            name: v.name,
          }));
        }
        path.push({
          name: arr[i].name,
          sub: sub,
        });
        break;
      }
      else {
        if (arr[i].sub) {
          path.push({
            code: arr[i].code,
            name: arr[i].name,
          });
          let subpath = getPath(arr[i].sub);
          if (subpath.length === 0) {
            path.pop();
            continue;
          }
          else {
            path.push(...subpath);
            break;
          };
        }
        else {
          continue;
        }
      }
    }
    return path;
  };

  let breadcrumbs = getPath(categories);
  const thisPage = breadcrumbs.pop();

  const getLayout = arr => arr.map(v => <li key={v.code}>
    <Link to={`/catalog/${v.code}`}>{v.name}</Link>
  </li>);

  return (

    <header className="PageHeading">

      {breadcrumbs.length > 0 ? (
        <ul className="PageHeading-breadcrumbs">
          {getLayout(breadcrumbs)}
        </ul>
      ) : null}

      <h1>{thisPage.name}</h1>

      {thisPage.sub ? (
        <ul className="PageHeading-subcategories">
          {getLayout(thisPage.sub)}
        </ul>
      ) : null}

    </header>

  );

};

export default PageHeading;