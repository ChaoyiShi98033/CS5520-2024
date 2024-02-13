import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import Header from '../componets/Header';
import Input from '../componets/Input';
import GoalDetails from '../componets/GoalDetails';
import GoalItem from '../componets/GoalItem';
import {useState} from 'react';

export default function Home (navigation) {
  const appName = 'My awesome app';
  const [goals, setGoals] = useState ([]);
  const [isModalVisible, setIsModalVisible] = useState (false);

  function receiveInput (data) {
    console.log ('recieve input ', data);
    //setText(data);
    //1. define a new obj (text:..., id:...)
    //2. use Math.random() to set id
    const newGoal = {text: data, id: Math.random ()};
    //const newArray = [...goals, newGoal];
    //use updater function whenever we are updating state variable base on the current value
    setGoals (currentGoals => {
      return [...goals, newGoal];
    });
    console.log (goals);

    setIsModalVisible (false);
    //use this to update the text showing in the
    //Text component
  }

  function dismissModal () {
    setIsModalVisible (false);
  }

  function goalDeleteHandler (deletedId) {
    console.log ('deleted', deletedId);
    //we need to know which item was clicked? they have unique id
    //use the id to filter the array
    //which goal was deleted -> id
    //remove that from the goal array -> filter
    /*    const updateArray = goals.filter((goal) => {
          return goal.id !== deletedId;
        }) */
    //setGoals(updatedArray)
    setGoals (currentGoals => {
      return currentGoals.filter (goal => {
        return goal.id !== deletedId;
      });
    });
  }

  function goalPressHandler (goalItem) {
    // console.log(goalItem);
    // navigate to GoalDetails using navigation prop
    //We need to pass the goal data to Details page
    console.log (goalItem);
    navigation.navigate ('Details', {GoalDetails});
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />

        <Header name={appName} version={2} />
        <Button title="Add a goal" onPress={() => setIsModalVisible (true)} />
        <Input
          inputHandler={receiveInput}
          modalVisible={isModalVisible}
          dismissModal={dismissModal}
        />
      </View>
      <View style={styles.bottomView}>
        <FlatList
          contentContainerStyle={styles.scrollViewContent}
          data={goals}
          renderItem={({item}) => {
            console.log (item);
            return (
              <GoalItem
                goalObj={item}
                deleteFunction={goalDeleteHandler}
                detailFunction={goalPressHandler}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: "center",
    justifyContent: 'center',
  },
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottomView: {
    flex: 4,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
  },
});
