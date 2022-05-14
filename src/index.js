import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import store from "./store";
import 'rsuite/dist/rsuite.min.css'
import "./rsuite-theme.scss"
import "./index.css";
import { CustomProvider } from "rsuite";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomProvider theme="dark">
      <App />
      </CustomProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
