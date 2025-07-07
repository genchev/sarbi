//import logo from './logo.svg';
//import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Dashboard from "./Dashboard";
import LogoutButton from "./components/LogoutButton";
import { Box } from "@mui/material";

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
    <>
      {user && (
        <Box position="absolute" top={16} right={16}>
          <LogoutButton />
        </Box>
      )}
      {user ? <Dashboard /> : <Login />}
    </>
  );
}
export default App;
