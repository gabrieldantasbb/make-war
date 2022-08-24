import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Parabens from "./Pages/Parabens/Parabens";
import { Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parabens" element={<Parabens />} />
      </Routes>
    </div>
  );
};

export default App;
