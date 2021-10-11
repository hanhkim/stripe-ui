import React, { useState } from 'react';
import * as classnames from 'classnames';
import MenuProduct from './MenuProduct';
import './Header.scss';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='header' style={{ position: 'absolute', zIndex: 1 }}>
      <nav className='header__container'>
        <div>Stripe</div>
        <div className='header__menu'>
          <ul
            className={classnames({
              'header__menu-list': true,
              'header__menu-list-active': showMenu,
            })}
          >
            <li className='header__menu-item'>
              <button href='#'>Products</button>
              <MenuProduct />
            </li>
            <li className='header__menu-item'>
              <button>Use cases</button>
              <MenuProduct
                style={{
                  height: '300px',
                  width: '400px',
                  left: 'calc(50% - 200px)',
                }}
              />
            </li>
            <li className='header__menu-item'>
              <button>Developers</button>
              {/* <MenuProduct /> */}
            </li>
            <li className='header__menu-item'>
              <button>Company</button>
              {/* <MenuProduct /> */}
            </li>
            <li className='header__menu-item'>
              <button>Pricing</button>
            </li>
          </ul>
        </div>
        <div>
          <button className='header__btn'>Sign in</button>
        </div>
        <button
          className={classnames({
            header__hamburger: true,
            'header__hamburger-active': showMenu,
          })}
          onClick={onClickMenu}
        >
          <span class='bar'></span>
          <span class='bar'></span>
          <span class='bar'></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
