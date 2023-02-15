import React from 'react';

import './HeaderButton.css';

const HeaderButton = props => {
  return (
    <button
      type="button"
      className={`HeaderButton ${props.cls}`}
      title={props.children}
      onClick={props.byClick}
    >
      <span className="HeaderButton-icon">{props.icon}</span>
      <span className="HeaderButton-text">{props.children}</span>
      {props.label ? (
        <span className="HeaderButton-label">{props.label}</span>
      ) : null}
    </button>
  );
};

export default HeaderButton;