import React from 'react';
import SlideBar from '../slide-bar/SlideBar';
import styles from "./SlideForm.module.scss"
const SlideForm = ({orderRef}) => {
  return (
    <section className={styles.section} >
      <SlideBar orderRef={orderRef}/>
    </section>
  );
};

export default SlideForm;
