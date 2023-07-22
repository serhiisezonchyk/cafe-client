import React from 'react';

import Logo from '../../assets/img/logo.png';
import networks from '../../utils/networks';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={styles.footerform}>
      <div className='container mx-auto'>
        <div className={styles.datadiv}>
          <a href='#'>
            <img className='h-[30px]' src={Logo} alt='' />
          </a>
          <div className='text-[15px]'>
            &copy; Copyright 2023. All rights reserved.
          </div>
          <div className='flex'>
            {networks.map((item, index) => (
              <a key={index} href={item.href}>
                <div className={styles.networkslinkdiv}>{<item.icon />}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
