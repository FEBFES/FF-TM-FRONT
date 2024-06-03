import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { setupStore } from "./__data__/store";
import { Provider } from "react-redux";
import { App } from "./app";
import { ConfigProvider, theme, App as ApplicationWrap } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const store = setupStore();

// new PerformanceObserver((entryList) => {
//   for (const entry of entryList.getEntries()) {
//     console.log('LCP candidate:', entry.startTime, entry);
//   }
// }).observe({ type: 'largest-contentful-paint', buffered: true });

root.render(
  <ConfigProvider
    theme={{
      components: {
        Layout: {
          bodyBg: "#1a1a1a",
          //colorBgContainer: '#262626'
        },
      },
      algorithm: [theme.compactAlgorithm, theme.darkAlgorithm],
    }}
  >
    <Router>
      <Provider store={store}>
        <ApplicationWrap>
          <App />
        </ApplicationWrap>
      </Provider>
    </Router>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
