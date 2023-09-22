import {useNavigation, useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Guest'>;

const GuestScreen: FC<Props> = () => {
  const route = useRoute<Props['route']>();
  const navigation = useNavigation<Props['navigation']>();

  const onPress = () => {
    navigation.navigate('Login', {
      setUser: route.params.setUser,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Guest!</Text>
      <Button title="Login" onPress={onPress} />
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
