import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { Button, TextField, Box, Typography, Paper, Alert } from "@mui/material";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");


const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    setError(err.message);
  }
};


  const login = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setInfo("");
      const cred = await signInWithEmailAndPassword(auth, email, password);
      if (!cred.user.emailVerified) {
        await sendEmailVerification(cred.user);
        setError(
          "Имейлът не е потвърден. Изпратихме нов имейл за потвърждение."
        );
        await signOut(auth);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const register = async () => {
    try {
      setError("");
      setInfo("");
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(cred.user);
      setInfo("Изпратихме имейл за потвърждение.");
      await signOut(auth);
    } catch (err) {
      setError(err.message);
    }
  };

//TextField fullWidth label="Имейл" margin="normal" />
//        <TextField fullWidth label="Парола" type="password" margin="normal" />
//        <Button variant="contained" fullWidth style={{ marginTop: 16 }}>Вход</Button>


return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f5f5f5">
      <Paper elevation={3} style={{ padding: 24, width: 320 }}>
        <Typography variant="h5" align="center" gutterBottom>Вход</Typography>
        <form onSubmit={login}>
          <TextField
            label="Имейл"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Парола"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 1 }}>
              {error}
            </Alert>
          )}
          {info && (
            <Alert severity="info" sx={{ mt: 1 }}>
              {info}
            </Alert>
          )}
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
            Вход
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            onClick={register}
          >
            Регистрация
          </Button>
        </form>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          onClick={googleLogin}
        >
          Вход с Google
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;

