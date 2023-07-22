import React from 'react';
import SlideForm from '../../components/slide-form/SlideForm';
import Header from '../../components/header/Header';
import Order from '../../components/order/Order';
import CaregorySelector from '../../components/category-selector/CaregorySelector';
import Contacts from '../../components/contacts/Contacts';
import Footer from '../../components/footer/Footer';
import styles from './MainPage.module.scss'

const MainPage = () => {
  const orderRef = React.useRef(null);
  const pricesRef = React.useRef(null);
  const contactsRef = React.useRef(null);
  return (
    <div className={styles.page}>
      <Header
        orderRef={orderRef}
        pricesRef={pricesRef}
        contactsRef={contactsRef}
      />

      <SlideForm orderRef={orderRef} />

      <div ref={orderRef}>
        <Order />
      </div>

      <div ref={pricesRef}>
        <CaregorySelector />
      </div>

      <div ref={contactsRef}>
        <Contacts orderRef={orderRef} />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
