import { Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

export default function Map({ route, navigation }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  function confirmHandler() {
    //navigate to profile and pass selectedLocation as parameter
    navigation.navigate("Profile", { selectedLocation: selectedLocation });
  }
  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: route.params ? route.params.initLoc.latitude : 37.78825,
          longitude: route.params ? route.params.initLoc.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => {
          console.log(e.nativeEvent);
          setSelectedLocation({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      >
        <Marker coordinate={selectedLocation} />
      </MapView>
      <Button
        disabled={!selectedLocation}
        title="Confirm Selected Location"
        onPress={confirmHandler}
      />
    </>
  );
}
const styles = StyleSheet.create({
  map: { flex: 1 },
});