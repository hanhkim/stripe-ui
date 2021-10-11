import React from 'react';
import * as classnames from 'classnames';
import './MenuProduct.scss';

const MenuProduct = ({ ...rest }) => {
  return (
    <div className={classnames({ 'menu-product': true })} {...rest}>
      <div className='rectangle'></div>
      <div>content</div>
    </div>
  );
};

export default MenuProduct;
