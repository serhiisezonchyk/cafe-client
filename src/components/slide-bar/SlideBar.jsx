import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../swiper.css';
import { slider_data } from '../../utils/slider_data';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './SlideBar.scss';
const SlideBar = (props) => {
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
      {slider_data.map((slide, index) => (
        <SwiperSlide key={index} className='slide'>
          <div className='slideContainer'>
            <div className='slideItem'>
              <div className='dataDiv'>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button
                  onClick={() => {
                    if (slide.buttonRef === 'order')
                      props.orderRef.current.scrollIntoView({
                        behavior: 'smooth',
                      });
                    else if (slide.buttonRef === 'menu')
                      props.menuRef.current.scrollIntoView({
                        behavior: 'smooth',
                      });
                  }}
                >
                  {slide.buttonText}
                </button>
              </div>
              <div className='imageDiv'>
                <img src={slide.image} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideBar;
