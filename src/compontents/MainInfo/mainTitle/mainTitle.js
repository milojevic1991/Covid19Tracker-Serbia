import React from "react";
import { Typography } from "antd";
import classes from "./mainTitle.module.css";

const { Title, Text } = Typography;

const MainTitle = ({ children }) => {
  const today = new Date();

  const formattedDate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  console.log(today);
  return (
    <div style={{ marginBottom: "3rem" }}>
      <Title
        style={{ marginTop: "4rem", marginBottom: "0px", padding: "0 0.5rem" }}
        level={2}
      >
        {children}
      </Title>
      <Title
        style={{ fontSize: "15px", marginTop: "0.4rem", marginBottom: "1rem" }}
        level={4}
      >{`Ažurirano : ${formattedDate}`}</Title>

      <div className={classes.linkRow}>
        <a href="https://chats.viber.com/covid19info">Covid-19 Info</a>

        <a href="tel:19819">Kontakt centar</a>

        <a href="tel:19920">Pomoć starim licima</a>

        <a href="https://covid19.rs/%d0%bd%d0%be%d0%b2%d0%b8-%d0%ba%d0%be%d1%80%d0%be%d0%bd%d0%b0-%d0%b2%d0%b8%d1%80%d1%83%d1%81-%d0%ba%d0%b0%d0%ba%d0%be-%d0%b4%d0%b0-%d1%81%d0%b5-%d0%b7%d0%b0%d1%88%d1%82%d0%b8%d1%82%d0%b8%d1%82%d0%b5/">
          Kako se zaštititi?
        </a>
      </div>
    </div>
  );
};

export default MainTitle;
