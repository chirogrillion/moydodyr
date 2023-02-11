import React from 'react';
import {useParams} from 'react-router-dom';

import Heading from '../components/Main/Heading/Heading';
import Catalog from '../components/Main/Catalog/Catalog';

const productsArr = require('../assets/products.json');

const CatalogPage = () => {

  const params = useParams();
  const categoryNumber = params.ctgrid ? Number(params.ctgrid) : 0;

  const getProductsFrom = arr => {
    let productsList = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].content) {
        productsList.push(...arr[i].content);
      }
      else {
        productsList.push(...getProductsFrom(arr[i].sub));
      }
    }
    return productsList;
  };

  const getDataFrom = arr => {
    let categoryPath = [];
    let productsList = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].code === categoryNumber) {
        let sub = null;
        if (arr[i].sub) {
          sub = arr[i].sub.map(v => ({
            code: v.code,
            name: v.name,
          }));
          productsList = getProductsFrom(arr[i].sub);
        }
        else {
          productsList = arr[i].content;
        }
        categoryPath.push({
          name: arr[i].name,
          sub: sub,
        });
        break;
      }
      else {
        if (arr[i].sub) {
          categoryPath.push({
            code: arr[i].code,
            name: arr[i].name,
          });
          let r = getDataFrom(arr[i].sub);
          if (r[0].length === 0) {
            categoryPath.pop();
            continue;
          }
          else {
            categoryPath.push(...r[0]);
            productsList = r[1]
            break;
          };
        }
        else {
          continue;
        }
      }
    }
    return [categoryPath, productsList];
  };

  const [categoryPath, productsList] = getDataFrom(productsArr);
  const productsNumber = productsList.length;

  return (
    <React.Fragment>
      <Heading
        path={categoryPath}
        listLength={productsNumber}
      />
      <Catalog list={productsList}/>
    </React.Fragment>
  );

};

export default CatalogPage;