import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BmlHomePage from "./app-modules/homepage/BmlHomePage";

import "./index.scss";

import './shared-modules/ui-styles/include_tailwind.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<BmlHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));