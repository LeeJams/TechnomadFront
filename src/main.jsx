import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Splash from "./components/layouts/Splash.jsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Splash /> */}
  </React.StrictMode>
);
