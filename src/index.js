import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Main from "./components/pages/Main";
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="abc" element={<h1>helo unk</h1>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  // <Main />,
  document.getElementById("root")
);
