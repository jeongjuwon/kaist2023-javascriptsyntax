import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback, useState} from 'react';
import {
  Alert,
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: FC<Props> = () => {
  const route = useRoute<Props['route']>();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onPress = useCallback(() => {
    // userName, password;
    // const response = fetch('http://api.kaist.com/login', { password, userName });
    // const data = response.json(); // { success: true, data: { id: 1, name: '홍길동' } }
    // const data = response.json(); // { success: false, message: '아이디 또는 비밀번호가 일치하지 않습니다.' }
    //

    if (userName === 'admin' && password === '1234') {
      route.params.setUser({
        id: 1,
        userName,
      });
    } else {
      Alert.alert('알림', '아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  }, [userName, password, route.params]);

  const onChangeUserName = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      // 이메일일 경우 이메일 형식인지 검사
      // 핸드폰 번호일경우.. -
      setUserName(e.nativeEvent.text);
    },
    [],
  );

  const onChangePassword = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setPassword(e.nativeEvent.text);
    },
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChange={onChangeUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChange={onChangePassword}
      />
      <Button title="Login" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default LoginScreen;
