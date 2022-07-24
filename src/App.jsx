import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demo from './shared-modules/demo/Demo';

import "./index.scss";

// const Demo = ()=> {
//   return <div className='mt-10 text-3xl mx-auto max-w-6xl'>Version 5</div>;
// }

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Demo />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
