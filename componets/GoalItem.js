import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";

export default function GoalItem ({goalObj, deleteFunction, detailFunction }) {

    function deleteHandler() {
        deleteFunction(goalObj.id);
        //pass the id
    }

    function goalPressHandler() {
      detailFunction(goalObj);
    }

  return (
    <View>
      <Pressable
        style={({ pressed }) => {
          return [styles.textContainer, pressed && styles.pressed];
        }}
        onPress={goalPressHandler}
        // android_ripple={{ color: "#e9e" }}
      >
        <Text style={styles.text}>{goalObj.text}</Text>
        <PressableButton onPressFunction={deleteHandler}>
          <AntDesign name="delete" size={24} color="black" />
        </PressableButton>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create ({
  pressed: {
    opacity: 0.5,
    backgroundColor: "#e9e",
  },
    text: { 
        textAlign: "center",
        fontSize: 18,
        color:"white",
        //boarderRadius: 10,
        backgroundColor:"purple",
       },
    textContainer:{
        borderRadius: 10,
        backgroundColor: "purple",
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
       },
});
