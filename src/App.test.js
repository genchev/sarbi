import React from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from './LanguageProvider';

jest.mock(
  'react-router-dom',
  () => ({
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ element }) => element,
    Link: ({ children, ...props }) => <a {...props}>{children}</a>,
  }),
  { virtual: true }
);

test('renders home page by default', () => {
  process.env.REACT_APP_FIREBASE_API_KEY = 'test';
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN = 'test';
  process.env.REACT_APP_FIREBASE_DATABASE_URL = 'test';
  process.env.REACT_APP_FIREBASE_PROJECT_ID = 'test';
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET = 'test';
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 'test';
  process.env.REACT_APP_FIREBASE_APP_ID = 'test';

  window.localStorage.setItem('lang', 'bg');

  const App = require('./App').default;
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
  expect(screen.getAllByText(/Сигнали/i)[0]).toBeInTheDocument();
});
