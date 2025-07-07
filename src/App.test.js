import { render, screen } from '@testing-library/react';

test('renders login screen by default', () => {
  process.env.REACT_APP_FIREBASE_API_KEY = 'test';
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN = 'test';
  process.env.REACT_APP_FIREBASE_DATABASE_URL = 'test';
  process.env.REACT_APP_FIREBASE_PROJECT_ID = 'test';
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET = 'test';
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 'test';
  process.env.REACT_APP_FIREBASE_APP_ID = 'test';

  const App = require('./App').default;
  render(<App />);
  expect(screen.getByText(/Вход с Google/i)).toBeInTheDocument();
});
