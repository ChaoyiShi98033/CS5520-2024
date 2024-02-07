import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalDetails(route) {
    console.log(route.paramas.goalData);
  return (
    <View>
      <Text>You are viewing details of {route.paramas.goalData.text}
      {route.paramas.goalData.id}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})