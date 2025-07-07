import { Box, Typography } from '@mui/material';

export default function Stats() {
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Статистики
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Тук ще визуализираме статистическа информация.
      </Typography>
    </Box>
  );
}
