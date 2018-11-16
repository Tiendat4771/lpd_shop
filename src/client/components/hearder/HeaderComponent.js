import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Logo from '../../static/image/logo';

// import PropTypes from 'prop-types';
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <Logo />
            Bootstrap
          </Link>
        </nav>
      </div>
    );
  }
}
export default HeaderComponent;
