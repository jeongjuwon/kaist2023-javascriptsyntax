import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParamList} from '../../App';
import initialUsers, {ManagedUser} from '../mockup/initialUsers';

type Props = StackScreenProps<RootStackParamList, 'UserManagement'>;

const UserManagementScreen: FC<Props> = () => {
  const navigation = useNavigation<Props['navigation']>();
  const [userList, setUserList] = useState<ManagedUser[]>(initialUsers);

  const onAddUser = () => {
    // const response = fetch('http://api.kaist.com/user', { email, name  });
    // const data = response.json(); // { success: true, data: { id: 21, email, name } }

    // const newUser: ManagedUser = {
    //   id: data.id,
    //   email: data.email,
    //   name: data.name,
    // };

    const newUser: ManagedUser = {
      id: 21,
      email: 'bbbb@tesla.com',
      name: 'Elon Musk',
    };

    setUserList(state => {
      return [newUser, ...state];
    });

    Alert.alert('User Added', 'User has been added successfully.');
  };

  const onDeleteUser = (id: number) => () => {
    // 유저를 삭제해야합니다....
    // 어떤 유저? 아이디를 알아야하죠...
    setUserList(state => {
      const index = state.findIndex(user => user.id === id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    });

    Alert.alert('User Deleted', 'User has been deleted successfully.');
  };

  const onPressUser = (user: ManagedUser) => () => {
    navigation.navigate('UserDetail', {
      age: 20,
      email: user.email,
      userId: user.id,
      name: user.name,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Management</Text>
      <ScrollView style={styles.scrollView}>
        {userList.map((user, userIndex) => {
          return (
            <Pressable
              key={user.id}
              style={styles.userItem}
              onPress={onPressUser(user)}>
              <Text style={styles.userInfo}>{`ID: ${user.id}`}</Text>
              <Text style={styles.userInfo}>{`Name: ${user.name}`}</Text>
              <Text style={styles.userInfo}>{`Email: ${user.email}`}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={onDeleteUser(user.id)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </Pressable>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={onAddUser}>
        <Text style={styles.addButtonText}>Add User</Text>
      </TouchableOpacity>
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
  scrollView: {
    marginBottom: 20,
  },
  userItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  deleteButtonText: {
    color: 'white',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: 'white',
  },
});

export default UserManagementScreen;
