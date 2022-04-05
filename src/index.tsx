import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ConfigProvider } from "antd";
import esES from "antd/lib/locale-provider/es_ES";
import enUS from "antd/lib/locale-provider/en_US";
import App from "./App";
import "./translates/config";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/ThemeUI";

const langObj = {
  en: enUS,
  es: esES,
};

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={langObj.es}>
      <RecoilRoot>
        <ThemeProvider theme={theme.default}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
