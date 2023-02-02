import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <input
      className="SearchBar"
      type="text"
      placeholder="Поиск товаров"
    />
  );
};

export default SearchBar;