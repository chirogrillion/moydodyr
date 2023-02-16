import React, {useRef} from 'react';

import './SearchBar.css';

const SearchBar = props => {

  const inputRef = useRef(null);
  const focusOnInput = () => inputRef.current.focus();

  return (
    <section className={props.cls ? `SearchBar ${props.cls}` : 'SearchBar'}>
      <div
        className="SearchBar-container"
        onClick={focusOnInput}
      >
        <span>&#61442;</span>
        <input
          type="text"
          placeholder="Поиск товаров"
          ref={inputRef}
        />
      </div>
      <div
        className="SearchBar-overlay"
        onClick={props.cbHide}
      ></div>
    </section>
  );

};

export default SearchBar;