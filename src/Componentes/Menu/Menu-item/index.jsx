// src/components/Menu/MenuItem.js
import React from 'react';

const MenuItem = ({ iconClass, link, onClick, children }) => {
  return (
    <li className="text-center py-0">
      <a href={link} onClick={onClick}>
        <span className="block text-l fs-2">
          <i className={iconClass}></i>
        </span>
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
