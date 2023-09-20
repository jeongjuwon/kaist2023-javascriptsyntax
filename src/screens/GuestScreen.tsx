import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type Props = {};

const GuestScreen: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Guest!</Text>
      <Button title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GuestScreen;
