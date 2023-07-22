import React from 'react';

import DogFooter from '../../assets/img/dog/dog-footer.png';
import styles from './Contacts.module.scss'
const Contacts = ({orderRef}) => {
  return (
    <section className={styles.section}>
      <div className={styles.divContainer}>
        <div className={styles.formHandler}>
          <div className={styles.imageDiv}>
            <img src={DogFooter} alt='' />
          </div>
          <div className={styles.textDiv}>
            <div className='text-orange font-semibold mb-3'>Контакти</div>
            <div className=' text-xl lg:text-4xl text-blue font-extrabold'>093-999-99-99</div>
            <div className='mb-7 text-blue'>Робочі години: 09:00 - 21:00 (пн-сб)</div>
            <button onClick={()=>{
                orderRef.current.scrollIntoView({behavior:'smooth'})
            }}>Залишити заявку</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
