import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from './componets/Header';
import {useState} from 'react';
import Input from './componets/Input';
import Home from './componets/Home';
import GoalDetails from './componets/GoalDetails';
import GoalItem from './componets/GoalItem';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App () {
  //const [text, setText] = useState("");

  const Stack = createNativeStackNavigator ();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#929'},
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "All My Goals",
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ route }) => {
            return {
              headerTitle: route.params ? route.params.data.text : "Details",
            };
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /*       <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {goals.map((goalObj)=> {
          return (
            <View style={styles.textContainer} key={goalObj.id}>
            { text? <Text style={styles.text}>{text}</Text> : null}
            <Text style={styles.text}>{goalObj.text}</Text>
            </View>
          )
        })}
        </ScrollView>  */
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: "center",
    justifyContent: 'center',
  },
});
