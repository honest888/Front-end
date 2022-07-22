import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/font.css";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
