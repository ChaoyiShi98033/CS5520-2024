import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './componets/Header';
import { useState } from 'react';

export default function App() {
  const appName = "My Awesome App";
  const [text, setText] = useState("");

  function changeTextHandler (changedText) {
    console.log("using is typing", changedText);
    setText(changedText);
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name = {appName} version = {2}>
        <Text>child 1</Text>
      </Header>
      <TextInput 
      style={styles.input} 
      value={text} 
      onChangeText={changeTextHandler} 
      />
      <Text>{text}</Text>
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
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
    width: "50%",
  }
});
