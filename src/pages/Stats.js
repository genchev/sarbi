import { Box, Typography } from '@mui/material';
import { useLang } from '../LanguageProvider';

export default function Stats() {
  const { t } = useLang();
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        {t('statsTitle')}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {t('statsInfo')}
      </Typography>
    </Box>
  );
}
