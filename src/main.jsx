import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
    <ToastContainer autoClose={1500} position="top-center" theme="colored" />
  </Provider>
);
