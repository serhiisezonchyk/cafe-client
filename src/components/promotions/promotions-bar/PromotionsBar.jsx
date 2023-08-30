import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { promotions_data } from '../../../utils/promotions';
import './PromotionsBar.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../swiper.css';

const PromotionsBar = () => {
  console.log(promotions_data);
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={true}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={true}
      className='mySlider'
    >
      {promotions_data.map((slide, index) => (
        <SwiperSlide key={index} className='prom-slide'>
          <div key={index} className='prom-form'>
            <img src={slide.image} alt='' />
            <div className='prom-text-desc'>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromotionsBar;
