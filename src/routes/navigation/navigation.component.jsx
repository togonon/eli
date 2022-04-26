import Fragment from 'react-dom';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <nav>
        <div className='logo'></div>
        <ul className='menu'>
          <div className='menu__item toggle'>
            <span></span>
          </div>
          <li className='menu__item'>
            <a href='journal' className='link link--dark'>
              <i className='fa fa-book'></i> Journal
            </a>
          </li>
          <li className='menu__item'>
            <a href='' className='link link--dark'>
              <i className='fa fa-github'></i> Github
            </a>
          </li>
          <li className='menu__item sign-in'>
            <a href='sign-in' className='link link--dark'>
              <i className='fa fa-github'></i> Sign In
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
