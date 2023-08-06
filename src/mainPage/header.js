import logo from './GloboLogo.png'
import React from 'react';
import PropTypes from 'prop-types'

const Header = ({ subtitle }) => {
  return (
    <header className='row'>
      <div className='col-md-5'>
        <img src={logo} className='logo' alt="GloboLogo" />
      </div>
      <div className='col-md-7 mt-5 subtitle'>
        { subtitle }
      </div>
    </header>
  );
}

Header.propTypes = {
  subtitle: PropTypes.string.isRequired
}

export default Header;