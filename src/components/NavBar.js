import { AppBar, Toolbar, Button, Box, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useLang } from '../LanguageProvider';

export default function NavBar({ user }) {
  const { lang, setLang, t } = useLang();
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', gap: 2 }}>
        {user && (
          <>
            <Button color="inherit" component={Link} to="/">
              {t('home')}
            </Button>
            <Button color="inherit" component={Link} to="/stats">
              {t('stats')}
            </Button>
            <Button color="inherit" component={Link} to="/settings">
              {t('settings')}
            </Button>
          </>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Select
          size="small"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          sx={{ mr: 2, color: 'inherit', borderColor: 'inherit' }}
        >
          <MenuItem value="bg">BG</MenuItem>
          <MenuItem value="en">EN</MenuItem>
        </Select>
        {user ? (
          <LogoutButton />
        ) : (
          <Button color="inherit" component={Link} to="/login">
            {t('login')}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
