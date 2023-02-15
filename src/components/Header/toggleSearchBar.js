const toggleSearchBar = () => {
  document.querySelector('.SearchButton').classList.toggle('clicked');
  document.querySelector('.SearchBar').classList.toggle('shown');
};

export {toggleSearchBar};