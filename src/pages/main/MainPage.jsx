import React from 'react';
import SlideForm from '../../components/slide-form/SlideForm';
import Header from '../../components/header/Header';
import Order from '../../components/order/Order';
import Contacts from '../../components/contacts/Contacts';
import Footer from '../../components/footer/Footer';
import './MainPage.scss';
import Menu from '../../components/menu/Menu';
import PromotionsForm from '../../components/promotions/PromotionsForm';

const MainPage = () => {
  const orderRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const contactsRef = React.useRef(null);
  const promotionsRef = React.useRef(null);

  return (
    <div className='page'>
      <Header orderRef={orderRef} menuRef={menuRef} contactsRef={contactsRef} />
      <div class='notification-box flex flex-col items-center justify-center fixed w-full z-50 p-3 top-[65px] md:top-[70px]'></div>
      <SlideForm
        orderRef={orderRef}
        menuRef={menuRef}
        contactsRef={contactsRef}
      />

      <div ref={orderRef}>
        <Order />
      </div>

      <div ref={menuRef}>
        <Menu />
      </div>

      <div ref={promotionsRef}>
        <PromotionsForm />
      </div>

      <div ref={contactsRef}>
        <Contacts orderRef={orderRef} />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
