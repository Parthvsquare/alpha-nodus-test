import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ConfigProvider from "antd/es/config-provider";
import { App } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#9437FD",
            // 148	55	253
            colorFill: "#191939",
            // 25	25	57
          },
        }}
      >
        <App>
          <MyApp />
        </App>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
