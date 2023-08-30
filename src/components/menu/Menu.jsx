import React from 'react';
import './Menu.scss';
import { WiSmoke } from 'react-icons/wi';
import { PiWineLight } from 'react-icons/pi';
import { BiFoodMenu } from 'react-icons/bi';
const Menu = () => {
  return (
    <div className='menu-list'>
      <div>
        <div className='menu-item'>
          <BiFoodMenu />
        </div>
        <p>Меню</p>
      </div>
      <div>
        <div className='menu-item'>
          <PiWineLight />
        </div>
        <p>Винна карта</p>
      </div>

      <div>
        <div className='menu-item'>
          <WiSmoke />
        </div>
        <p>Кальяни</p>
      </div>
    </div>
  );
};

export default Menu;
