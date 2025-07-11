import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../src/components/NavBar";
import Home from "./pages/Home.jsx";
import Pokedex from "./pages/Pokedex";


function App() {
  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </Router>
  )
}

export default App
