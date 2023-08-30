import React from 'react';
import footer from '../../assets/img/name.png';
import './Contacts.scss';
import { AiOutlinePhone, AiOutlineClockCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

const Contacts = ({ orderRef }) => {
  return (
    <section className='section'>
      <div className='divContainer'>
        <div className='formHandler'>
          <div className='imageDiv '>
            <img src={footer} alt='' />
          </div>
          <div className='textDiv'>
            <div>
              <AiOutlinePhone />
              <div className=' text-xl font-semibold'>Контакти:</div>
            </div>
            <div className=' text-xl lg:text-4xl font-extrabold mb-3'>
              +380970050303
            </div>
            <div className='mb-4'>
              <AiOutlineClockCircle />
              <div className='text-blue'>Робочий час: 08:00 - 22:30</div>
            </div>
            <div className='mb-7'>
              <GoLocation />
              <div className=' text-blue'>
                Адреса:
                <a href='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0,+27,+%D0%A7%D0%B5%D1%80%D0%BD%D0%B8%D0%B3%D0%BE%D0%B2,+%D0%A7%D0%B5%D1%80%D0%BD%D0%B8%D0%B3%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+14000/@51.492753,31.2944657,17z/data=!3m1!4b1!4m6!3m5!1s0x46d548eda472e731:0x51670b320be3bc18!8m2!3d51.492753!4d31.2970406!16s%2Fg%2F1th0937v?entry=ttu' target='blank'>
                  Myru Ave, 27, Chernihiv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
