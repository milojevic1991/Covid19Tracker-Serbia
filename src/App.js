import React from "react";
import "./App.css";

import Logo from "./compontents/Logo/logo";
//antd
import { Typography } from "antd";
import { Button } from "antd";
import Covid19 from "./container/Covid19/covid19";

const { Title } = Typography;

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Logo>#ostaniKodKuće</Logo>
          <h2 style={{ color: "white", margin: "0.9rem" }}>Covid19 - Srbija</h2>
        </header>
        <Covid19 />
      </div>
    </>
  );
}

export default App;
