import {StyleSheet, View} from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Content = ({children}: Props): JSX.Element => {
  return <View style={styles.content}>{children}</View>;
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
export default Content;
