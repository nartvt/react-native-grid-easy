import React from 'react'
import { View, Text } from 'react-native'

let title = "cybersoft react-native";
let renderTitle = () => {
  return <Text>Hello  123</Text>
}

let renderTitleText = () => {
  return "renderTitleText";
}
const Header = () => {
  return (
    <View>
      <Text>{title}</Text>
      {renderTitle()}
      <Text>{renderTitleText()}</Text>
    </View>
  )
}

export default Header
