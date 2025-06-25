import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button, TextField, Box, Typography, Paper, Alert } from '@mui/material';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


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
      await signInWithEmailAndPassword(auth, email, password);
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
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
            Вход
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

