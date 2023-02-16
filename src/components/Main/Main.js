import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Routes, Route} from 'react-router-dom';

import './Main.css';

import {refreshCatalog} from '../../store/catalog';

import CatalogPage from '../../pages/CatalogPage';
import CartPage from '../../pages/CartPage';

const Main = () => {

  useEffect(() => {
    loadData();
  });

  const catalog = useSelector(state => state.catalog);
  const dispatch = useDispatch();

  const loadData = () => {

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

  };

  return (
    <main className="Main">
      <div className="Main-container">{
        catalog.length === 0
          ? <p className="loading">Загрузка данных...</p>
          : <Routes>
            <Route path="/*" element={<CatalogPage/>}/>
            <Route path="/catalog/:ctgrid/*" element={<CatalogPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
      }</div>
    </main>
  );
};

export default Main;