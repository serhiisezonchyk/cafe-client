import React from 'react';
import Logo from '../../assets/img/logo.png';
import { CgMenuRight } from 'react-icons/cg';
import Nav from './nav/Nav';
import NavSmall from './nav-small/NavSmall';
import InfoHeader from './info-header/InfoHeader';
import styles from './Header.module.scss'

const Header = (props) => {
  const [background, setBackground] = React.useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setBackground(true) : setBackground(false);
    });
  }, []);
  return (
    <header
      className={`${background ? 'bg-white py-3 shadow-md' : 'bg-none py-3'} 
  ${styles.header}`}
    >
      <div className={styles.navitems}>
        <a href='#'>
          <img src={Logo} alt=''></img>
        </a>
        <div className={styles.navlarge}>
          <Nav {...props} />
        </div>
        <InfoHeader />
        <div
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className='lg:hidden cursor-pointer'
        >
          <CgMenuRight className='text-blue text-3xl' />
        </div>
        <div
          className={`${
            isMobileNavOpen ? 'max-h-[260px]' : 'max-h-0'
          } ${styles.navsmall}`}
        >
          <div className='contents' onClick={() => setIsMobileNavOpen(false)}>
            <NavSmall {...props} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
