import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function GoalDetails (navigation, route) {
  console.log (route.paramas.goalData);
  const [warning, setWatning] = useState (false);

  function warningHandler () {
    console.log ('warning');
    setWatning (true);
  }

  // functions inside useEffect are called after the rendering
  useEffect (() => {
    navigation.setOptions ({
      headerRight: () => {
        return <Button title="Warning" color="gray" onPress={warningHandler} />;
      },
    });
  }, []);

  return (
    <View>
      <Text>
        You are viewing details of {route.paramas.goalData.text}
        {route.paramas.goalData.id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create ({});
