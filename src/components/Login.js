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
import { useLang } from "../LanguageProvider";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [unverified, setUnverified] = useState(false);
  const { t } = useLang();


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
      setUnverified(false);
      const cred = await signInWithEmailAndPassword(auth, email, password);
      if (!cred.user.emailVerified) {
        setUnverified(true);
        await signOut(auth);
        return;
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
      setInfo(t('verificationSent'));
      await signOut(auth);
    } catch (err) {
      setError(err.message);
    }
  };

  const resendVerification = async () => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(cred.user);
      await signOut(auth);
      setInfo(t('verificationSent'));
    } catch (err) {
      setError(err.message);
    }
  };

//TextField fullWidth label="Имейл" margin="normal" />
//        <TextField fullWidth label="Парола" type="password" margin="normal" />
//        <Button variant="contained" fullWidth style={{ marginTop: 16 }}>Вход</Button>


  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f5f5f5">
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 320 }}>
        <Typography variant="h5" align="center" gutterBottom>
          {t('login')}
        </Typography>
        <form onSubmit={login}>
          <TextField
            label={t('email')}
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label={t('password')}
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
          {unverified && (
            <Alert severity="warning" sx={{ mt: 1 }} action={
              <Button color="inherit" size="small" onClick={resendVerification}>
                {t('resendLink')}
              </Button>
            }>
              {t('awaitingActivation')}
            </Alert>
          )}
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
            {t('login')}
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            onClick={register}
          >
            {t('register')}
          </Button>
        </form>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          onClick={googleLogin}
        >
          {t('loginWithGoogle')}
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;

