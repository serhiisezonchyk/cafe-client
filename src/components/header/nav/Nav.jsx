import React from 'react';
import styles from './Nav.module.scss';
const Nav = (props) => {
  console.log(props);
  return (
    <nav className={styles.navbar}>
      <ul>
        <li
          onClick={() => {
            props.orderRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <a>Заявка</a>
        </li>
        <li
          onClick={() => {
            props.pricesRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <a>Ціни</a>
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
