import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'


export default function input() {
    const [text, setText] = useState("");

    function changeTextHandler (changedText) {
        console.log("using is typing", changedText);
        setText(changedText);
      }

  return (
    <View>
      <TextInput 
      placeholder = "Type something"
      style={styles.input} 
      value={text} 
      onChangeText={changeTextHandler} 
      />
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