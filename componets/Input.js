import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import ImageManager from "./ImageManager";

export default function Input({ inputHandler, modalVisible, dismissModal }) {
  const [text, setText] = useState("");
  const [imageURI, setImageURI] = useState("");
  // callback handler
  function changeTextHandler(changedText) {
    // console.log("user is typing ", changedText);

    setText(changedText);
  }

  function confirmHandler() {
    inputHandler(text, imageURI);
    setText("");
  }
  function cancelHandler() {
    setText("");

    // hide the modal
    dismissModal();
  }
  function receiveImageURI(takenImageUri) {
    setImageURI(takenImageUri);
  }
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
            }}
            style={styles.image}
          />
          <Image source={require("../assets/icon.png")} style={styles.image} />
          <TextInput
            placeholder="Type something"
            style={styles.input}
            value={text}
            onChangeText={changeTextHandler}
          />
          <ImageManager receiveImageURI={receiveImageURI} />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonView}>
              <Button title="Cancel" onPress={cancelHandler} />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Confirm"
                onPress={confirmHandler}
                disabled={!text}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    width: "30%",
    margin: 5,
  },

  modalView: {
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: "10%",
    alignItems: "center",
  },
  buttonsContainer: { flexDirection: "row" },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 100, height: 100 },
});