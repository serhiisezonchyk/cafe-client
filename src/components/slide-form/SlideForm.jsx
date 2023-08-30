import React from 'react';
import SlideBar from '../slide-bar/SlideBar';
import "./SlideForm.scss"
const SlideForm = (props) => {
  return (
    <section className='section-slide'>
      <SlideBar {...props}/>
    </section>
  );
};

export default SlideForm;
