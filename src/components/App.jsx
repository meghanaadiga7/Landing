import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScreenOne, ScreenTwo, ScreenThree, ScreenFour } from "../screens";
import Stepe from "./Stepper/stepper";
import Logo from "./Logo";
const App = () => {
  return (
    <Router>
      <Logo />
      <Stepe />
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="/screentwo" element={<ScreenTwo />} />
        <Route path="/screenthree" element={<ScreenThree />} />
        <Route path="/screenfour" element={<ScreenFour />} />
      </Routes>
    </Router>
  );
};

export default App;
