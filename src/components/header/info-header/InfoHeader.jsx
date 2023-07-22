import React from 'react';
import PhoneIcon from '../../../assets/img/phone.png';
import styles from './InfoHeader.module.scss'

const InfoHeader = () => {
  return (
      <div className={styles.infoheader}>
        <div>
          <div className={styles.logo}> 
            <img src={PhoneIcon} alt='' />
            <div>
              093-999-99-99
            </div>
          </div>

          <div className={styles.time}>
            <div className='hidden lg:flex'>Робочі години: 09:00 - 21:00 (пн-сб)</div>
            <div className='lg:hidden text-right'>09:00 - 21:00 (пн-сб)</div>
          </div>
        </div>
      </div>
  );
};

export default InfoHeader;
