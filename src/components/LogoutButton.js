import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function LogoutButton() {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Button variant="outlined" color="error" onClick={handleLogout}>
      Изход
    </Button>
  );
}
