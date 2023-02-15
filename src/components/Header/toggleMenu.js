const toggleMenu = () => {
  document.querySelector('.MenuButton').classList.toggle('clicked');
  document.querySelector('.Menu').classList.toggle('shown');
};

export {toggleMenu};