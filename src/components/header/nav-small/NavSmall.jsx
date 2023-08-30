import React from 'react';
import './NavSmall.scss';

const NavSmall = (props) => {
  return (
    <nav className={`navbar-small ${props.background?'with-background':''}`}>
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

export default NavSmall;
