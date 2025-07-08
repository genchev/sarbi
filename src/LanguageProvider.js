import { createContext, useContext, useEffect, useState } from 'react';

export const translations = {
  en: {
    home: 'Home',
    stats: 'Statistics',
    settings: 'Settings',
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    loginWithGoogle: 'Login with Google',
    email: 'Email',
    password: 'Password',
    verificationSent: 'Confirmation email sent.',
    awaitingActivation: 'Your account is awaiting activation.',
    resendLink: 'Resend activation link',
    welcome: 'Welcome!',
    mainInfo: 'Main info will be here soon.',
    statsTitle: 'Statistics',
    statsInfo: 'Statistical information will be displayed here.',
    settingsTitle: 'Settings',
    settingsInfo: 'You will be able to change application settings here.',
    firebaseMissing:
      'Firebase configuration missing. Check your environment variables.',
    signalsTitle: 'Signals',
    signalsLoading: 'Loading signals...',
    noSignals: 'No signals available.'
  },
  bg: {
    home: 'Начало',
    stats: 'Статистики',
    settings: 'Настройки',
    login: 'Вход',
    logout: 'Изход',
    register: 'Регистрация',
    loginWithGoogle: 'Вход с Google',
    email: 'Имейл',
    password: 'Парола',
    verificationSent: 'Изпратихме имейл за потвърждение.',
    awaitingActivation: 'Акаунтът ви очаква активация.',
    resendLink: 'Изпрати нов линк за активация',
    welcome: 'Добре дошли!',
    mainInfo: 'Тук скоро ще има основна информация.',
    statsTitle: 'Статистики',
    statsInfo: 'Тук ще визуализираме статистическа информация.',
    settingsTitle: 'Настройки',
    settingsInfo: 'Тук ще можете да променяте настройките на приложението.',
    firebaseMissing:
      'Липсва конфигурация за Firebase. Проверете environment променливите.',
    signalsTitle: 'Сигнали',
    signalsLoading: 'Зареждане на сигнали...',
    noSignals: 'Няма налични сигнали.'
  },
};

const LanguageContext = createContext({
  lang: 'bg',
  setLang: () => {},
  t: (key) => key,
});

export const useLang = () => useContext(LanguageContext);

export function LanguageProvider({ children }) {
  const stored = localStorage.getItem('lang');
  const browserLang =
    typeof navigator !== 'undefined' && navigator.language
      ? navigator.language
      : '';
  const [lang, setLang] = useState(
    stored || (browserLang.startsWith('bg') ? 'bg' : 'en')
  );

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
