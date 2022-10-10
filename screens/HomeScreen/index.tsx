import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useLocalization} from '../../contexts/LocalizationContext';
import Container from '../../components/Container';
import Content from '../../components/Content';

export default function HomeScreen() {
  const {t, locale, setLocale} = useLocalization();
  const currentLocale = locale === 'en' ? 'th' : 'en';
  const objLang = {
    en: 'English',
    th: 'ไทย',
  };
  return (
    <Container>
      <Content>
        <View>
          <Text>{t('screens.IndexScreen.title')}</Text>
          <TouchableOpacity onPress={() => setLocale(currentLocale)}>
            <Text>
              {t('screens.IndexScreen.button', {
                lang: objLang[currentLocale as keyof typeof objLang],
              })}
            </Text>
          </TouchableOpacity>

          <Text>5555</Text>
        </View>
      </Content>
    </Container>
  );
}
