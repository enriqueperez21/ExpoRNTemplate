import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator } from 'react-native';
import { useAuth } from '@/contexts';
import { ScreenDefault } from '@/components/ScreenDefault/ScreenDefault';

export const LoginScreen = () => {
  const { login, loadingState } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await login(username, password);
  };

  return (
    <ScreenDefault {...{screenTittle: "Login",userName: "",showHeadBar: true}}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      {loadingState ? (
        <ActivityIndicator />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </ScreenDefault>
  );
};