import { Box, Typography } from '@mui/material';
import { useLang } from '../LanguageProvider';

export default function Home() {
  const { t } = useLang();
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        {t('welcome')}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {t('mainInfo')}
      </Typography>
    </Box>
  );
}
