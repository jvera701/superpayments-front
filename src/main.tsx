import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
