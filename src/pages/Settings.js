import { Box, Typography } from '@mui/material';
import { useLang } from '../LanguageProvider';

export default function Settings() {
  const { t } = useLang();
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        {t('settingsTitle')}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {t('settingsInfo')}
      </Typography>
    </Box>
  );
}
