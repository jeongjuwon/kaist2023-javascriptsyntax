import {useNavigation, useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';

type Props = StackScreenProps<RootStackParamList, 'UserDetail'>;

const UserDetailScreen: FC<Props> = () => {
  const route = useRoute<Props['route']>();
  const navigation = useNavigation<Props['navigation']>();

  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Detail</Text>
      <Text style={styles.userInfo}>{`ID:${route.params.userId}`}</Text>
      <Text style={styles.userInfo}>{`Name:${route.params.name}`}</Text>
      <Text style={styles.userInfo}>{`Email:${route.params.email}`}</Text>
      <Button title="Go Back" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default UserDetailScreen;
