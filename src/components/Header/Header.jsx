import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';
import { useState } from 'react';

const Header = () => {
  const mobile = window.innerWidth <= 830 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header" id='header'>
      <img src={Logo} alt="logo" className='logo' />
      
      {menuOpened && mobile === true ? (
        <div
          onClick={()=> setMenuOpened((prev) => !prev)}
          style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px', cursor: 'pointer' }}
        >
          <img src={Bars} alt=""/>
        </div>
      ) : (
          
        <ul className='header-menu'>
            <li>
              <Link
                onClick={() => setMenuOpened((prev) => !prev)}
                activeClass='active'
                to='header'
                spy={true}
                smooth={true}
              >Home</Link> 
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened((prev) => !prev)}
                to='programs'
                spy={true}
                smooth={true}
              >Programs</Link> 
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened((prev) => !prev)}
                to='reasons'
                spy={true}
                smooth={true}
              >Why us</Link> 
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened((prev) => !prev)}
                to='plans'
                spy={true}
                smooth={true}
              >Plans</Link> 
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened((prev) => !prev)}
                to='testimonials'
                spy={true}
                smooth={true}
              >Testimonials</Link> 
            </li>
        </ul>
      )}

    </div>
  )
}
export default Header