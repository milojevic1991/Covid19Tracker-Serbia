import React from "react";
import { Typography } from "antd";
import classes from "./footer.module.css";
import { LinkedinOutlined, GithubOutlined , CheckCircleTwoTone } from '@ant-design/icons';


const { Title, Text } = Typography;

const Footer = () => {
  return (
     <>
    <div className={classes.footer}>
 
      <div>

        <a href='https://www.linkedin.com/in/nemanjamilojevic1991/'>
           <LinkedinOutlined style={{ fontSize: '22px', color: '##c1c10a', padding:'0 0.4rem', marginTop:'1rem' }} /> 
           </a>
           <a href='https://github.com/milojevic1991'>
           <GithubOutlined  style={{ fontSize: '22px', color: '##c1c10a', padding:'0.3rem 0.4rem', marginTop:'1rem' }}/> 
           </a>
       
        </div>

        <Title
        style={{
          color: "white",
          padding: "1rem",
          marginBottom: "0px",
          fontSize: "14px"
        }}
        level={4}
      >
        By Nemanja Milojević
      </Title>

    </div>

       
    </>
  );
};

export default Footer;
