import React, {useRef} from 'react';
import './SearchBar.css';

function SearchBar() {

  const inputRef = useRef(null);
  const focusOnInput = () => inputRef.current.focus();

  return (
    <section className="SearchBar">
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
    </section>
  );

};

export default SearchBar;