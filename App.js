import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Appstack from './navigation/Appstack';

const App = () => {
  return (
    <NavigationContainer>
      <Appstack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
