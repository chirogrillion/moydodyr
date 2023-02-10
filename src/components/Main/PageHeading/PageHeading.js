import React from 'react';

import './PageHeading.css';

const categories = require('../../../assets/categories.json');

const PageHeading = props => {

  const getCategoryName = (arr) => {
    let result = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].code === props.categoryId) {
        result = arr[i].name;
        break;
      }
      else {
        if (arr[i].sub) {
          result = getCategoryName(arr[i].sub);
          if (result === null) {
            continue;
          }
          else {
            break;
          };
        }
        else {
          continue;
        }
      }
    }
    return result;
  };

  const title = props.categoryId === 0 ? 'Каталог' : getCategoryName(categories);

  return (
    <header className="PageHeading">
      <h1>{title === null ? 'Нет такой страницы' : title}</h1>
    </header>
  );

};

export default PageHeading;