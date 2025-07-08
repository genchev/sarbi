import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useLang } from '../LanguageProvider';

export default function LogoutButton() {
  const { t } = useLang();
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Button variant="outlined" color="inherit" onClick={handleLogout}>
      {t('logout')}
    </Button>
  );
}
