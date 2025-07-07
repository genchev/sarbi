//import logo from './logo.svg';
//import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  if (!auth) {
    return (
      <Box p={2} textAlign="center">
        Липсва конфигурация за Firebase. Проверете environment променливите.
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <NavBar user={user} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
