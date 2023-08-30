import React from 'react';
import PhoneIcon from '../../../assets/img/phone.png';
import './InfoHeader.scss';
import { AiOutlinePhone } from 'react-icons/ai';

const InfoHeader = ({ background }) => {
  return (
    <div className='infoheader'>
      <div>
        <div className={`logo ${background ? 'with-background' : ''}`}>
          <AiOutlinePhone />
          <div>+380970050303</div>
        </div>

        <div className={`times ${background ? 'with-background' : ''}`}>
          <div className='hidden lg:flex'>
            Робочий час: 08:00 - 22:30
          </div>
          <div className='lg:hidden text-right'>08:00 - 22:30</div>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
