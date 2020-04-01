import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./mainInfo.module.css";
import MainTitle from "./mainTitle/mainTitle";

//antd
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const MainInfo = () => {
  const [infected, setInfected] = useState({});

  useEffect(() => {
    axios
      .get("https://pomber.github.io/covid19/timeseries.json")
      .then(response => {
        setInfected(response.data["Serbia"].slice(-1)[0]);
      });
  }, []);

  return (
    <>
      <div>
        <MainTitle>Statistički podaci na dnevnom nivou:</MainTitle>
        <div className={classes.infoCard}>
          <Title level={2}>Trenutno zaraženih:</Title>
          <Title
            style={{
              fontSize: "55px",
              fontWeight: "700",
              margin: 0,
              color: "#F000",
              color: "#bbb"
            }}
          >
            {infected.confirmed}
          </Title>
        </div>

        <div className={classes.infoCard}>
          <Title level={2}>Preminulih:</Title>
          <Title
            style={{ fontSize: "55px", fontWeight: "700", margin: 0 }}
            type="danger"
          >
            {infected.deaths}
          </Title>
        </div>

        <div className={classes.infoCard}>
          <Title level={2}>Oporavljenih :</Title>
          <Title
            style={{
              fontSize: "55px",
              fontWeight: "700",
              margin: 0,
              color: "green"
            }}
            type="secondary "
          >
            {infected.recovered}
          </Title>
        </div>

        <div className={classes.mainInfoText}>
          <Typography>
            <Title>Novi korona virus - kako da se zaštitite?</Title>
            <Paragraph>
            Infekcija korona virusom u oko 80% slučajeva uzrokuje blagu bolest i većina obolelih se oporavlja dok 6% ima teški oblik bolesti sa komplikacijama. Najveći broj teških oblika bolesti registrovan je kod osoba starijih od 60 godina i osoba sa hroničnim bolestima (bolesti srca i krvnih sudova, hronične bolesti disajnih organa, šećerna bolest). Starije osobe i osobe sa hroničnim bolestima treba da se pridržavaju istih opštih mera zaštite kao i opšta populacija i da koriste svoju uobičajenu terapiju prema savetu lekara.
            </Paragraph>
            <Paragraph>
            Često perite ruke sapunom i vodom ili sredstvima za suvo pranje ruku na bazi alkohola. 

              <Text strong>
               Zašto? Ukoliko se na vašim rukama nalazi virus, pranjem ruku sapunom i vodom i čišćenjem ruku sredstvom za suvo pranje na bazi alkohola ubijate virus.
              </Text>
              .
            </Paragraph>
            <Title level={2}>Pitanja i odgovori</Title>
            <Paragraph>
            Ukoliko želite da postanete volonter prijavite se elektronski na www.budivolonter.gov.rs
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <a href="https://covid19.rs/%d0%bf%d0%b8%d1%82%d0%b0%d1%9a%d0%b0-%d0%b8-%d0%be%d0%b4%d0%b3%d0%be%d0%b2%d0%be%d1%80%d0%b8-%d0%be-%d0%b1%d0%be%d0%bb%d0%b5%d1%81%d1%82%d0%b8-%d1%83%d0%b7%d1%80%d0%be%d0%ba%d0%be%d0%b2%d0%b0%d0%bd/">Pitanja i odgovori o bolesti uzrokovanoj novim koronavirusom COVID-19</a>
                </li>
                <li>
                  <a href="https://covid19.rs/%d1%81%d1%82%d0%b0%d1%82%d0%b8%d1%81%d1%82%d0%b8%d1%87%d0%ba%d0%b8-%d0%bf%d0%be%d0%b4%d0%b0%d1%86%d0%b8-%d0%be-%d0%ba%d0%be%d1%80%d0%be%d0%bd%d0%b0%d0%b2%d0%b8%d1%80%d1%83%d1%81%d1%83/">Statistički podaci o korona virusu</a>
                </li>
                <li>
                  <a href="https://covid19.rs/%d0%b2%d0%b5%d1%81%d1%82%d0%b8/">Najnovije vesti</a>
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MainInfo;
