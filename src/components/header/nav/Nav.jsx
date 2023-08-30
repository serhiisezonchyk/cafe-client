import React from 'react';
import './Nav.scss';
const Nav = (props) => {
  return (
    <nav className={`navbar-large ${props.background?'with-background':''}`}>
      <ul>
        <li
          onClick={() => {
            props.orderRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <a>Бронювання</a>
        </li>
        <li
          onClick={() => {
            props.menuRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <a>Меню</a>
        </li>
        <li
          onClick={() => {
            props.contactsRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <a>Контакти</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
