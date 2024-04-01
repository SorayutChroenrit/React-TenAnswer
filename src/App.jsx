import "./App.css";
import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Easy from "./pages/Easy";
import Normal from "./pages/Normal";
import Hard from "./pages/Hard";
import Firstpage from "./pages/Firstpage";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/firstpage" />} />
          <Route path="/Firstpage" element={<Firstpage />} />
          <Route path="/Easy" element={<Easy />} />
          <Route path="/Normal" element={<Normal />} />
          <Route path="/Hard" element={<Hard />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
