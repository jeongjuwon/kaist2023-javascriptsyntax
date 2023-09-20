import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import GuestScreen from './src/screens/GuestScreen';
import LoginScreen from './src/screens/LoginScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';
import UserManagementScreen from './src/screens/UserManagementScreen';

type User = {
  id: number;
  name: string;
};

export type RootStackParamList = {
  Guest: undefined;
  Login: undefined;
  UserManagement: undefined;
  UserDetail: {
    // id: number;
    name: string;
    email: string;
    userId: number;
    age: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Guest" component={GuestScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserManagement" component={UserManagementScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
