import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {refreshCatalog} from '../store/catalog';

import Heading from '../components/Main/Heading/Heading';
import Catalog from '../components/Main/Catalog/Catalog';

const CatalogPage = () => {

  const catalog = useSelector(state => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {

    const ajaxHandlerScript = 'https://fe.it-academy.by/AjaxStringStorage2.php';

    let sp = new URLSearchParams();
    sp.append('f', 'READ');
    sp.append('n', 'KRGL_MOYDODYR_PRODUCTS');

    fetch(ajaxHandlerScript, {
      method: 'post',
      body: sp,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`fetch error ${response.status}`);
        }
        else {
          return response.json();
        }
      })
      .then(data => {
        const products = JSON.parse(data.result);
        dispatch(refreshCatalog(products));
      })
      .catch(error => {
        console.error(error);
      })
    ;

  }, []);

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

  let categoryPath;
  let productsList;
  let pathLength;
  let currCategory;
  let productsNumber;

  if (catalog.length > 0) {

    [categoryPath, productsList] = getDataFrom(catalog);

    pathLength = categoryPath.length;
    currCategory = categoryPath[pathLength - 1].name;
    document.title = `${currCategory} \u2014 Мойдодыр`;

    productsNumber = productsList.length;

  }

  return (
    catalog.length === 0
      ? <p className="loading">Загрузка данных...</p>
      : <React.Fragment>
        <Heading
          path={categoryPath}
          listLength={productsNumber}
        />
        <Catalog
          categoryId={categoryNumber}
          list={productsList}
        />
      </React.Fragment>
  );

};

export default CatalogPage;