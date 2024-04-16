import { StyleSheet, Text, View, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./componets/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./componets/GoalDetails";
import Signup from "./componets/Signup";
import Login from "./componets/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-files/firebaseSetup";
import PressableButton from "./componets/PressableButton";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Profile from "./componets/Profile";
import Map from "./componets/Map";
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
  handleNotification: async function (notification) {
    //marking the function async will make it always return a resolved promise
    // you could use the info about incoming notification and do different behaviour for different notifications
    return {
      shouldShowAlert: true,
    };
  },
});
const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("received listener", notification);
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (notificationResponse) => {
        console.log(
          "received response listener",
          notificationResponse.notification.request.content.data.url
        );
        Linking.openURL(
          notificationResponse.notification.request.content.data.url
        );
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        setUserLoggedIn(true);
        // ...
      } else {
        // User is signed out
        // ...
        setUserLoggedIn(false);
      }
    });
  }, []);
  const AuthStack = (
    <>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </>
  );
  const AppStack = (
    <>
      <Stack.Screen
        options={({ navigation }) => {
          return {
            headerTitle: "All My Goals",
            headerRight: () => {
              return (
                <PressableButton
                  onPressFunction={() => {
                    navigation.navigate("Profile");
                  }}
                >
                  <Ionicons name="person" size={24} color="white" />
                </PressableButton>
              );
            },
          };
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => {
            return (
              <PressableButton
                onPressFunction={() => {
                  try {
                    signOut(auth);
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                <AntDesign name="logout" size={24} color="white" />
              </PressableButton>
            );
          },
        }}
      />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen
        options={({ route }) => {
          return {
            headerTitle: route.params ? route.params.data.text : "Details",
          };
        }}
        name="Details"
        component={GoalDetails}
      />
    </>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerStyle: { backgroundColor: "#929" },
          headerTintColor: "white",
        }}
      >
        {userLoggedIn ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});