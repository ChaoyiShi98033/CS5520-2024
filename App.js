import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Header from "./componets/Header";
import { useState } from "react";
import Input from "./componets/Input";

export default function App() {
  const appName = "My awesome app";
  //const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);


/*   //const newGoal = {text:data, id:Math.random()};

  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
} */

  function receiveInput(data) {
    console.log("recieve input ", data);
    //setText(data);
    //1. define a new obj (text:..., id:...)
    //2. use Math.random() to set id
    const newGoal = {text:data, id:Math.random()}
    //const newArray = [...goals, newGoal];
    //use updater function whenever we are updating state variable base on the current value
    setGoals((currentGoals) => {return [...goals, newGoal]});
    console.log(goals);

    setIsModalVisible(false);
    //use this to update the text showing in the
    //Text component
  } 

  function dismissModal() {
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />

        <Header name={appName} version={2} />
        <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
        <Input
          inputHandler={receiveInput}
          modalVisible={isModalVisible}
          dismissModal={dismissModal}
        />
      </View>
      <View style={styles.bottomView}>
        <ScrollView horizontal={true}>
        {goals.map((goalObj)=> {
          return (
            <View style={styles.textContainer} key={goalObj.id}>
            {/* { text? <Text style={styles.text}>{text}</Text> : null} */}
            <Text style={styles.text}>{goalObj.text}</Text>
            </View>
          )
        })}
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomView: { 
    flex: 4, 
    backgroundColor: "lightpink", 
    alignItems:"center",
    padding: 5,
    marginTop: 5,
  },
  text: { 
    textAlign: "center",
    fontSize: 80,
    color:"white",
    boarderRadius: 10,
    backgroundColor:"purple",
   },
   textContainer:{
    marginTop: 25,
   }
});
