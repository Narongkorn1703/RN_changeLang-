import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Container = ({children}: Props): JSX.Element => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
export default Container;
