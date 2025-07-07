import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

export default function NavBar({ user }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Начало
        </Button>
        <Button color="inherit" component={Link} to="/stats">
          Статистики
        </Button>
        <Button color="inherit" component={Link} to="/settings">
          Настройки
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        {user ? (
          <LogoutButton />
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Вход
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
