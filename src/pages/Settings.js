import { Box, Typography } from '@mui/material';

export default function Settings() {
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Настройки
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Тук ще можете да променяте настройките на приложението.
      </Typography>
    </Box>
  );
}
