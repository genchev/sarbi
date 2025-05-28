//import logo from './logo.svg';
//import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { signOut } from "firebase/auth";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

	return user ? <Dashboard /> : <Login />;
}
export default App;
