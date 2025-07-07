import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Добре дошли!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Тук скоро ще има основна информация.
      </Typography>
    </Box>
  );
}
