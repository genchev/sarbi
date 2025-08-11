import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLang } from '../LanguageProvider';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import SignalCard from '../components/SignalCard';

export default function Home({ user }) {
  const { t } = useLang();
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limitCount, setLimitCount] = useState(20);

  useEffect(() => {
    if (!db || !user) return;
    setLoading(true);
    const q = query(
      collection(db, 'signals'),
      orderBy('receivedAt', 'desc'),
      limit(limitCount)
    );
    const unsub = onSnapshot(
      q,
      (snap) => {
        setSignals(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        setLoading(false);
      },
      () => setLoading(false)
    );
    return unsub;
  }, [db, user, limitCount]);

  const loadMore = () => setLimitCount((l) => l + 20);

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom textAlign="center">
        {t('signalsTitle')}
      </Typography>
      {loading && (
        <Typography align="center" color="text.secondary">
          {t('signalsLoading')}
        </Typography>
      )}
      {!loading && signals.length === 0 && (
        <Typography align="center" color="text.secondary">
          {t('noSignals')}
        </Typography>
      )}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 2,
          mt: 2,
          gridAutoRows: '1fr',
        }}
      >
        {signals.map((s) => (
          <SignalCard key={s.id} signal={s} />
        ))}
      </Box>
      {signals.length >= limitCount && (
        <Box textAlign="center" mt={2}>
          <Button onClick={loadMore}>{t('more')}</Button>
        </Box>
      )}
    </Box>
  );
}
