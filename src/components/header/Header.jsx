import React from 'react';
import Logo from '../../assets/img/symbol.png';
import { CgMenuRight } from 'react-icons/cg';
import Nav from './nav/Nav';
import NavSmall from './nav-small/NavSmall';
import InfoHeader from './info-header/InfoHeader';
import './Header.scss';

const Header = (props) => {
  const [background, setBackground] = React.useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setBackground(true) : setBackground(false);
    });
  }, []);
  return (
    <header className={`${background ? 'with-background' : ''} header`}>
      <div className='navitems'>
        <a href='#'>
          <img src={Logo} alt=''></img>
        </a>
        <div className='navlarge'>
          <Nav {...props} background={background} />
        </div>
        <InfoHeader background={background} />
        <div
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className='lg:hidden cursor-pointer'
        >
          <CgMenuRight />
        </div>
        <div
          className={`${isMobileNavOpen ? 'is-mobile' : ''} 
           navsmall
          `}
        >
          <div className='contents' onClick={() => setIsMobileNavOpen(false)}>
            <NavSmall {...props} background={background} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
