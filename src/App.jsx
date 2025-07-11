import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { useEffect, useState } from "react";

import app from "./firebase/credentials.js";

import Login from "./pages/Login.jsx";
import NavBar from "../src/components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Pokedex from "./pages/Pokedex.jsx";

const auth = getAuth(app)

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth,(userFirebase)=>{
      if(userFirebase){
        setUser(userFirebase);
      }else{
        setUser(null);
      }
    })
  })

  return (
    <Router>
      {user && <NavBar />} 
      <Routes>
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
        </>
      ) : (
        <Route path="*" element={<Login />} />
      )}
    </Routes>
  </Router>
  )
}

export default App
