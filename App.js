import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './componets/Header';
import Input from './componets/Input';
//import { useState } from 'react';

export default function App() {
  const appName = "My Awesome App";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name = {appName} version = {2}>
        <Text>child 1</Text>
      </Header>
      <Input />
      {/* <Text>{text}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
