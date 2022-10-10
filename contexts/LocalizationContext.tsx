import React, {useEffect} from 'react';
import {I18n, TranslateOptions} from 'i18n-js';
import th from '../translations/th.json';
import {Scope} from 'i18n-js/typings/typing';
import en from '../translations/en.json';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  children: JSX.Element;
}

interface Context {
  t: (scope: Scope, options?: TranslateOptions | undefined) => string;
  locale: string;
  setLocale: (locale: string) => void;
}

const LocalizationContext = React.createContext<Context>({
  t: () => '',
  locale: '',
  setLocale: () => '',
});
const i18n = new I18n({
  th,
  en,
});
i18n.enableFallback = true;
export const LocalizationProvider: React.FC<Props> = ({children}) => {
  const [locale, setLocale] = React.useState('en');

  useEffect(() => {
    getLanguage();
  }, []);

  const getLanguage = async () => {
    const language = await AsyncStorage.getItem('language');
    setLocale(language ? language : 'en');
  };

  const localizationContext = React.useMemo(
    () => ({
      t: (scope: Scope, options: TranslateOptions | undefined) =>
        i18n.t(scope, {locale, ...options}),
      locale,
      setLocale: (l: string) => {
        setLocale(l);
        AsyncStorage.setItem('language', locale);
      },
    }),
    [locale],
  );

  React.useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);

  return (
    <LocalizationContext.Provider value={localizationContext}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): Context => {
  const context = React.useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization can be use in LocalizationContext only');
  }
  return context;
};
