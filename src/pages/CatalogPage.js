import React from 'react';
import {useParams} from 'react-router-dom';

import Heading from '../components/Main/Heading/Heading';
import Catalog from '../components/Main/Catalog/Catalog';

const categories = require('../assets/categories.json');
const products = require('../assets/products.json');

const CatalogPage = () => {

  const params = useParams();
  const category = params.ctgrid ? Number(params.ctgrid) : 0;

  const getPath = (arr) => {
    let path = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].code === category) {
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

  const path = getPath(categories);

  return (
    <React.Fragment>
      <Heading path={path}/>
      <Catalog products={products}/>
    </React.Fragment>
  );

};

export default CatalogPage;