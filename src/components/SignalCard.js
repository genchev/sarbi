import { Paper, Typography, Box } from '@mui/material';

export default function SignalCard({ signal }) {
  if (!signal) return null;

  const startTime = new Date(signal.market?.event?.startTime || signal.market?.event?.competitionInstance?.startAt || '');
  const foundAt = new Date(signal.lastFoundAt || signal.receivedAt);

  const format = (date) =>
    isNaN(date) ? '' : date.toLocaleString('en-GB', { timeZone: 'UTC' });

  return (
    <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Typography variant="caption" color="text.secondary">
        {signal.market?.event?.participants?.[0]?.sport} – {signal.market?.event?.competitionInstance?.competition?.shortName}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {format(startTime)} UTC
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 1 }}>
        {signal.market?.event?.participants?.[1]?.name} @ {signal.market?.event?.participants?.[0]?.name}
      </Typography>
      <Typography variant="body2">
        Market: {signal.market?.type} ({signal.market?.segment})
      </Typography>
      <Typography variant="body2">Type: {signal.type}</Typography>
      {signal.outcomes?.map((o) => (
        <Typography key={o.key} variant="body2">
          - {o.participant?.name} ({o.modifier > 0 ? '+' : ''}{o.modifier}) → {o.payout} @ {o.source}
        </Typography>
      ))}
      <Box sx={{ flexGrow: 1 }} />
      <Typography variant="caption" color="text.secondary">
        Found: {format(foundAt)} UTC
      </Typography>
    </Paper>
  );
}
