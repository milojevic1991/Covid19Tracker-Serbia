import React from 'react';
import { Typography } from 'antd';
import id from './logo.module.css';

const { Title } = Typography;
const Logo = ({children}) => {
   return (
     <Title id={id.logo} level ={4}>{children}</Title>
   );
};

export default Logo;