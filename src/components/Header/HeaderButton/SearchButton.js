import React from 'react';

import HeaderButton from './HeaderButton';
import {toggleSearchBar} from '../toggleSearchBar';

const SearchButton = () => {
  return (
    <HeaderButton
      cls="SearchButton"
      icon="&#xf002;"
      byClick={toggleSearchBar}
    >Поиск</HeaderButton>
  );
};

export default SearchButton;