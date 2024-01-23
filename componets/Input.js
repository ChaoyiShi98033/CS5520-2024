import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'


export default function input({inputHandler}) {
    console.log(inputHandler);
    const [text, setText] = useState("");

    function changeTextHandler (changedText) {
        console.log("using is typing", changedText);
        setText(changedText);
      }

    function confirmHandler() {
        inputHandler(text);
    }

  return (
    <View>
      <TextInput 
      placeholder = "Type something"
      style={styles.input} 
      value={text} 
      onChangeText={changeTextHandler} 
      />
      <Button title="confirm" onPress={function(){inputHandler(text)}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "red",
        width: "50%",
      }
})