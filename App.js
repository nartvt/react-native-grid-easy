/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView, ScrollView, View, Text,
  StatusBar, Image, Button, TouchableOpacity, TextInput,
  StyleSheet,  Dimensions} from 'react-native';
import EasyGridComponent from './src/components/EasyGridComponent';
import Assignment from './src/components/Assignment';
import Header from './src/components/Header';
import HeaderC from './src/components/HeaderC';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const { container, bgDark, setBackGround, setHeight, setWidth } = StyleSheet.create({
  setHeight: (num) => {
    return (heightDevice * num) / 100;
  },
  setWidth: (num) => {
    return (widthDevice * num) / 100;
  },
  container: {
    flex: 1,// flex  1 chiem 1 phan man hinh so voi cha (man hinh)
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgDark: {
    backgroundColor: '#000'
  },
  setBackGround: (color) => { return { backgroundColor: color } },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  flexItem: {
    backgroundColor: '#fff'
  }
})


const App = () => {
  console.log('123');
  return (
    <>
      {/* <Assignment/> */}
      {/* <EasyGridComponent /> */}
      <Header />
      <HeaderC />
    </>
  )
}

export default App;
