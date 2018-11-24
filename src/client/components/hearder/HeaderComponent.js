import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
// import { Button } from 'antd';
import RaisedButton from 'material-ui/RaisedButton';

import logo from '../../static/image/logo.png';

const style = {
  logo: {
    width: 40,
    height: 40
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wrap_header: {
    backgroundColor: '#2f2e2e',
    padding: '10px 100px'
  },
  link_menu: {
    paddingLeft: 30,
    color: 'white',
    textDecoration: 'none'
  }
};

const HeaderComponent = () => (
  <div style={style.wrap_header}>
    <div style={style.header}>
      <div className="logo">
        <img src={logo} alt="logo" style={style.logo} />
      </div>
      <div className="menu">
        <Link to="/" style={style.link_menu}>
          {' '}
          HOME
          {' '}
        </Link>
        <Link to="products" style={style.link_menu}>
          {' '}
          PRODUCTS
          {' '}
        </Link>
        <Link to="/" style={style.link_menu}>
          <RaisedButton
            label="BUY NOW"
            backgroundColor="rgb(70, 217, 189)"
            labelColor="rgb(255, 255, 255)"
          />
          {' '}
        </Link>
      </div>
    </div>
  </div>
);

export default HeaderComponent;
