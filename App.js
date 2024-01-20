import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './componets/Header';

export default function App() {
  const appName = "My Awesome App";
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name = "My Awesome app" version = {2} />
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
