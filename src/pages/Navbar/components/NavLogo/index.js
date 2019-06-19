import React from 'react';
import { Icon } from 'antd';
import './styles.scss';
import { PropTypes } from 'prop-types';

const MainLogo = ( {logoLink}) => (
  <div className="logo">

    <a href={logoLink} >
      <span style={{ fontSize: '18px', color: '#fff', padding: '10px' }}>
        <Icon type="appstore" spin style={{ fontSize: '22px', marginRight: '5px' }} />
        {/* <Icon type="setting" spin style={{fontSize: '20px', color: '#fff' }}  theme="filled" /> */}
        Sila UI
    </span>
    </a>
  </div>
);

export default MainLogo;

MainLogo.propTypes = {
  logoLink: PropTypes.string
}
MainLogo.defaultProps = {
  logoLink: "/"
}