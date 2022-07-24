import React from 'react';
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BmlHomePage from './app-modules/homepage/BmlHomePage';

import "./index.scss";

const App = () => (
  <>
    <BmlHomePage />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
