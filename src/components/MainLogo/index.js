import React from 'react';
import { Icon } from 'antd';
import './styles.scss';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const MainLogo = ({ logoLink }) => (
  <div className="logo">
    <Link to={logoLink}>
      <span style={{ fontSize: '18px', color: '#fff', padding: '10px' }}>
        <Icon type="appstore" spin style={{ fontSize: '22px', marginRight: '5px' }} />
        Sila UI
    </span>
    </Link>
  </div>
);

export default MainLogo;

MainLogo.propTypes = {
  logoLink: PropTypes.string
}
MainLogo.defaultProps = {
  logoLink: "/"
}