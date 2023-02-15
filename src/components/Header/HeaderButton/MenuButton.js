import React from 'react';

import HeaderButton from './HeaderButton';
import {toggleMenu} from '../toggleMenu';

const MenuButton = () => {
  return (
    <HeaderButton
      cls="MenuButton"
      icon="&#xf0c9;"
      byClick={toggleMenu}
    >Меню</HeaderButton>
  );
};

export default MenuButton;