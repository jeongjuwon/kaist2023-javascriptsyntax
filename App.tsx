import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Dispatch, Fragment, SetStateAction, useState} from 'react';
import GuestScreen from './src/screens/GuestScreen';
import LoginScreen from './src/screens/LoginScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';
import UserManagementScreen from './src/screens/UserManagementScreen';

type User = {
  id: number;
  userName: string;
};

export type RootStackParamList = {
  Guest: {
    setUser: Dispatch<SetStateAction<User | null>>;
  };
  Login: {
    setUser: Dispatch<SetStateAction<User | null>>;
  };
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
      <Stack.Navigator initialRouteName={user ? 'UserManagement' : 'Guest'}>
        {user ? (
          <Fragment>
            <Stack.Screen
              name="UserManagement"
              component={UserManagementScreen}
            />
            <Stack.Screen name="UserDetail" component={UserDetailScreen} />
          </Fragment>
        ) : (
          <>
            <Stack.Screen
              name="Guest"
              component={GuestScreen}
              initialParams={{setUser}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              initialParams={{setUser}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
