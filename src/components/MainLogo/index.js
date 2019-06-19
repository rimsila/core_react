import React from 'react';
import { Icon } from 'antd';
import './styles.scss';

const MainLogo = () => (
  <div className="logo">
    <span style={{fontSize: '18px', color: '#fff',padding: '10px' }}>
    <Icon type="appstore"  spin style={{fontSize: '22px',marginRight: '5px' }}/>
    {/* <Icon type="setting" spin style={{fontSize: '20px', color: '#fff' }}  theme="filled" /> */}
    Sila UI
    </span>
  </div>
);

export default MainLogo;

