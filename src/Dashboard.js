import { Button, Typography, Paper, Box } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "./firebase"; // провери дали пътят е точен

export default function Dashboard() {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f2f5"
    >
      <Paper elevation={4} sx={{ p: 4, width: 400, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Добре дошъл 👋
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Вече си в системата. Очаквай сигнали!
        </Typography>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Изход
        </Button>
      </Paper>
    </Box>
  );
}

